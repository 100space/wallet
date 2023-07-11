import {
  BadGatewayException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Contract, Provider } from 'ethers';
import { MARKET_ABI } from '../abi/MARKET.ABI';
import { MarketRepository } from './market.repository';
import { TrendsService } from '../trends/trends.service';
import { ListNftByCaDto, ListNftByEoaDto } from './dto/market.dto';
import { IListNft } from '../interface/market.interface';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ListNftTransactionDto } from './dto/transaction-market.dto';
import { NftInfoDto } from './dto/info-market.dto';
import { ERC721_ABI } from 'src/abi/ERC721.ABI';

@Injectable()
export class MarketService {
  private readonly logger = new Logger(MarketService.name);
  private readonly contract: Contract;
  private readonly PREFIX = 10 ** 18;
  private currencyPrice = 0;
  private currency = 'matic';
  constructor(
    @Inject('Provider') private readonly provider: Provider,
    private readonly httpService: HttpService,
    private readonly marketRepository: MarketRepository,
    private readonly trendService: TrendsService,
  ) {
    this.contract = new Contract(
      process.env.MARKET_CA,
      MARKET_ABI,
      this.provider,
    );
    this.changeBasicCurrency({ symbol: this.currency });
  }

  async listCollections() {
    try {
      const response = await this.marketRepository.findAll();
      return response.map((v) => {
        return {
          ca: v.address,
          name: v.name,
          nickname: v.symbol,
          description: v.description,
          image: v.logo,
          prices: [
            {
              currency: 'KRW',
              price:
                Math.floor(v.floorPrice * this.currencyPrice * 1000) / 1000,
            },
            {
              currency: this.currency,
              price:
                Math.floor(v.floorPrice * this.currencyPrice * 1000) / 1000,
            },
          ],
        };
      });
    } catch (error) {
      throw new InternalServerErrorException('Unable to find data', {
        cause: new Error(),
        description: 'MongoDB Error',
      });
    }
  }

  async listNftByCa({ ca }: ListNftByCaDto) {
    try {
      const result = await this.contract.getAllTokensInCollection(ca);
      console.log(result);

      return await this.listNft({ result });
    } catch (error) {
      throw new BadGatewayException('Unable to get NFTs in collection', {
        cause: new Error(),
        description: 'Contract Error',
      });
    }
  }

  async listNftByEoa({ eoa }: ListNftByEoaDto) {
    try {
      const result = await this.contract.getUserTokens(eoa);

      return await this.listNft({ result });
    } catch (error) {
      throw new BadGatewayException('Unable to get NFTs from user', {
        cause: new Error(),
        description: 'Contract Error',
      });
    }
  }

  async getMetadata({ metadata }: { metadata: string }) {
    const ifpsUrl = 'https://ipfs.io/ipfs/';
    const { data } = await firstValueFrom(
      this.httpService.get(`${ifpsUrl}${metadata.replace('ipfs://', '')}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new NotFoundException('Unable to get IPFS MetaData', {
            cause: new Error(),
            description: 'IPFS Error',
          });
        }),
      ),
    );

    return {
      name: data.name,
      descrition: data.description,
      image: data.ipfs.replace('ipfs://', ifpsUrl),
    };
  }

  async listNft({ result }): Promise<IListNft[]> {
    try {
      return await Promise.all(
        result.map(async (v: string[]) => {
          const [
            marketId,
            owner,
            nftAddress,
            tokenId,
            price,
            metadata,
            isSoldOut,
          ] = v;

          const data = await this.getMetadata({ metadata });
          const krwPrice = this.trendService.krw.price;

          const prices = [
            {
              currency: 'KRW',
              price: (Number(price) / this.PREFIX) * krwPrice,
            },
            { currency: 'MATIC', price: Number(price) / this.PREFIX },
          ];

          return {
            ...data,
            marketId: Number(marketId),
            owner,
            nftAddress,
            tokenId: Number(tokenId),
            prices,
            isSoldOut,
          };
        }),
      );
    } catch (error) {
      throw new NotFoundException('Invalid Data', {
        cause: new Error(),
        description: 'Invalid Data Error',
      });
    }
  }

  async listNftTransaction({ ca, tokenId }: ListNftTransactionDto) {
    try {
      const response = await this.marketRepository.findTransaction({
        ca,
        tokenId,
      });
      const result = response.map((v) => {
        const { price, krwPrice, createdAt, updatedAt, ...rest } = v;
        return {
          ...rest,
          price: [
            { currency: 'MATIC', price: price / this.PREFIX },
            { currency: 'KRW', price: krwPrice },
          ],
          createdAt: this.customDate({ date: createdAt }),
          updatedAt: this.customDate({ date: updatedAt }),
        };
      });

      return result;
    } catch (error) {
      throw new InternalServerErrorException('Unable to get transaction data', {
        cause: new Error(),
        description: 'MongoDB Error',
      });
    }
  }

  customDate({ date }) {
    const parsedTime = new Date(Date.parse(date));
    const thisIime = new Date().getTime();

    const timeElapsed = Math.floor((thisIime - parsedTime.getTime()) / 1000);

    if (timeElapsed < 60) return '방금전';
    if (timeElapsed < 60 * 60) return `${Math.floor(timeElapsed / 60)}분 전`;
    if (timeElapsed < 60 * 60 * 24)
      return `${Math.floor(timeElapsed / (60 * 60))}시간 전`;
    if (timeElapsed < 60 * 60 * 24 * 7)
      return `${Math.floor(timeElapsed / (60 * 60 * 24))}일 전`;
    return parsedTime.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  async nftInfo({ ca, tokenId }: NftInfoDto) {
    try {
      const { creator, name, symbol } = await this.marketRepository.findOne({
        ca,
      });
      if (!creator || !name || !symbol)
        throw new Error('No value found for CA');
      const response = await this.contract.getAllTokensInCollection(ca);

      const [tokenInfo] = await Promise.all(
        response
          .filter((v: string[]) => Number(v[3]) === tokenId)
          .map(async (v: string[]) => {
            const owner = v[1];
            const price = Number(v[4]) / this.PREFIX;
            const isTrade = v[6];
            const { name, descrition, image } = await this.getMetadata({
              metadata: v[5],
            });
            return {
              nftName: name,
              descrition,
              image,
              owner,
              isTrade,
              price: { currency: 'MATIC', price },
              fee: { currency: 'MATIC', price: price * 0.01 },
            };
          }),
      );

      if (!tokenInfo) throw new Error('TokenInfo is empty');

      const blockchain = {
        name: 'polygon',
        image:
          'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?}1624446912',
      };

      return {
        ca,
        supply: response.length,
        creator,
        symbol,
        blockchain,
        tokenId,
        tokenStandard: 'ERC 721',
        collectionName: name,
        ...tokenInfo,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(),
        description: 'Get NftInfo Error',
      });
    }
  }

  async changeBasicCurrency({ symbol }: { symbol: string }) {
    this.currency = symbol.toUpperCase();
    const currencyPrice = (await this.trendService.getTokenData({ symbol }))
      .price;
    this.currencyPrice = Math.floor(currencyPrice * 1000) / 1000;
    return '변경되었습니다.';
  }

  async addNft({ ca, tokenId }) {
    const abi = ERC721_ABI;
    const contract = new Contract(ca, abi, this.provider);

    const totalSupply = await contract.totalSupply();

    // const result = await contract.tokenURI(tokenId);
    // console.log(result);

    // const ipfsUrl = 'https://ipfs.io/ipfs/';

    // const { data } = await firstValueFrom(
    //   this.httpService.get(`${ipfsUrl}${result.replace('ipfs://', '')}.json`),
    // );

    // console.log(data);

    // console.log(`${ipfsUrl}${data.image.replace('ipfs://', '')}`);
  }
}

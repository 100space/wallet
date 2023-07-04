import {
  BadGatewayException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Contract, Provider } from 'ethers';
import { MARKET_ABI } from 'src/abi/MARKET.ABI';
import { MarketRepository } from './market.repository';
import { TrendsService } from 'src/trends/trends.service';
import { ListNftByCaDto, ListNftByEoaDto } from './dto/market.dto';
import { IListNft } from 'src/interface/market.interface';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class MarketService {
  private readonly logger = new Logger(MarketService.name);
  private readonly contract: Contract;
  private readonly PREFIX = 10 ** 18;
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

  async getMetadata({ metadata }) {
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

  async getPrice({ id }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [usdPrice, krwPrice] = await this.trendService.simplePrice({ id });
    return krwPrice.price;
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
          const krwPrice = await this.getPrice({ id: 'matic-network' });

          const prices = [
            {
              curreny: 'KRW',
              price: (Number(price) / this.PREFIX) * krwPrice,
            },
            { curreny: 'MATIC', price: Number(price) / this.PREFIX },
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
}

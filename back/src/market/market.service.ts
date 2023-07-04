import { Inject, Injectable } from '@nestjs/common';
import { Contract, Provider } from 'ethers';
import { MARKET_ABI } from 'src/abi/MARKET.ABI';
import { MarketRepository } from './market.repository';
import axios from 'axios';
import { TrendsService } from 'src/trends/trends.service';

@Injectable()
export class MarketService {
  constructor(
    @Inject('Provider') private readonly provider: Provider,
    private readonly marketRepository: MarketRepository,
    private readonly trendService: TrendsService,
  ) {}

  async listCollections() {
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
  }

  async listNft({ ca }) {
    const contract = new Contract(
      process.env.MARKET_CA,
      MARKET_ABI,
      this.provider,
    );

    const result = await contract.getAllTokensInCollection(ca);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [usdPrice, krwPrice] = await this.trendService.simplePrice({
      id: 'matic-network',
    });

    const response = await Promise.all(
      result.map(async (v) => {
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
        const PREFIX = 10 ** 18;
        const prices = [
          {
            curreny: 'KRW',
            price: (Number(price) / PREFIX) * krwPrice.price,
          },
          { curreny: 'MATIC', price: Number(price) / PREFIX },
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

    return response;
  }

  async getMetadata({ metadata }) {
    const ifpsUrl = 'https://ipfs.io/ipfs/';
    const { data } = await axios.get(
      `${ifpsUrl}${metadata.replace('ipfs://', '')}`,
    );
    return {
      name: data.name,
      descrition: data.description,
      image: data.ipfs.replace('ipfs://', ifpsUrl),
    };
  }
}

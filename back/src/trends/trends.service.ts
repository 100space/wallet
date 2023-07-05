import { HttpService } from '@nestjs/axios';
import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import {
  ICoinList,
  ICoinInfo,
  IGetCoinList,
} from '../interface/trends.interface';

@Injectable()
export class TrendsService {
  private readonly logger = new Logger(TrendsService.name);
  constructor(private readonly httpService: HttpService) {}

  async simplePrice({ id }) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`simple/price?ids=${id}&vs_currencies=usd%2Ckrw`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new BadGatewayException('Unable to get price data', {
              cause: new Error(),
              description: 'Coingecko Error',
            });
          }),
        ),
    );
    const keys = Object.keys(data[id]);
    return keys.map((v) => {
      return { currency: v.toUpperCase(), price: data[id][v] };
    });
  }

  async getCoinList({ count }): Promise<ICoinList[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`coins/markets?vs_currency=usd&per_page=${count}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new BadGatewayException('Unable to get coin list', {
              cause: new Error(),
              description: 'Coingecko Error',
            });
          }),
        ),
    );

    const response = await Promise.all(
      data.map(async (v: IGetCoinList, i: number) => {
        return {
          rank: i + 1,
          name: v.name,
          symbol: v.symbol,
          image: v.image,
          changePercent: v.price_change_percentage_24h,
          coinPrice: await this.simplePrice({ id: v.id }),
        };
      }),
    );

    return response;
  }

  async getTokenData({ symbol }): Promise<ICoinInfo> {
    const {
      data: { coins },
    } = await firstValueFrom(
      this.httpService.get(`search?query=${symbol}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new BadGatewayException('Unable to get token id', {
            cause: new Error(),
            description: 'Coingecko Error',
          });
        }),
      ),
    );

    const id = coins[0].id;

    const { data } = await firstValueFrom(
      this.httpService.get(`coins/${id}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new BadGatewayException('Unable to get token data', {
            cause: new Error(),
            description: 'Coingecko Error',
          });
        }),
      ),
    );
    return {
      name: data.name,
      symbol: data.symbol,
      rank: data.market_cap_rank,
      marketCap: data.market_data.market_cap.krw,
      totalSupply: data.market_data.total_supply,
      maxSupply: data.market_data.max_supply,
      circulatingSupply: data.market_data.circulating_supply,
      description: data.description.ko.replace(/\r\n/g, ''),
      image: data.image.large,
      changePercent: data.market_data.price_change_percentage_24h,
      currency: 'KRW',
      price: data.market_data.current_price.krw,
    };
  }
}

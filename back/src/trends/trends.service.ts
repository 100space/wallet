import { HttpService } from '@nestjs/axios';
import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { TrendRepository } from './trends.repository';
import {
  ICoinList,
  ICoinInfo,
  IGetCoinList,
} from '../interface/trends.interface';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TrendsService {
  private readonly logger = new Logger(TrendsService.name);
  public krw = { currency: 'KRW', price: 1200 };
  constructor(
    private readonly httpService: HttpService,
    private readonly trendRepository: TrendRepository,
  ) {}

  async getExchange({ from = 'USD', to = 'KRW' }) {
    try {
      const {
        data: { conversion_rates },
      } = await this.httpService.axiosRef.get(
        `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${from}`,
      );

      const currencyCode = to.split(',');
      const result = currencyCode.map((v) => {
        const code = v.toUpperCase();
        return { currency: code, price: conversion_rates[code] };
      });

      return result;
    } catch (error) {
      this.logger.error(error.response.data);
      throw new InternalServerErrorException('Can not get exchange', {
        cause: new Error(),
        description: 'Get Exchange Error',
      });
    }
  }

  @Cron('0 10 9 * * *', { timeZone: 'Asia/Seoul' })
  async cronExchange() {
    try {
      const [response] = await this.getExchange({});
      this.krw = response;
      console.log(this.krw);
    } catch (error) {
      throw new NotFoundException('Cron Exchange Error', {
        cause: new Error(),
        description: 'Cron Exchange Error',
      });
    }
  }

  async simplePrice({ id, currency = 'USD' }) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`simple/price?ids=${id}&vs_currencies=${currency}`)
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
    return { currency: currency.toUpperCase(), price: data[id][currency] };
  }

  async getCoinList({ currency = 'USD', count }): Promise<ICoinList[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`coins/markets?vs_currency=${currency}&per_page=${count}`)
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
      data.map((v: IGetCoinList, i: number) => {
        return {
          rank: i + 1,
          name: v.name,
          symbol: v.symbol,
          image: v.image,
          changePercent: v.price_change_percentage_24h,
          coinPrice: [
            { currency: currency.toUpperCase(), price: v.current_price },
            {
              currency: this.krw.currency,
              price: this.krw.price * v.current_price,
            },
          ],
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

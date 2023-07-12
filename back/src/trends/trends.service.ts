import { HttpService } from '@nestjs/axios';
import {
  BadGatewayException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { TrendRepository } from './trends.repository';
import { ICoinList, ICoinInfo } from '../interface/trends.interface';
import { Cron, Interval } from '@nestjs/schedule';
import { UpdateTrendDto } from './dto/update-trend.dto';
import { ListTokensDto } from './dto/list-tokens-trends.dto';

@Injectable()
export class TrendsService {
  private readonly logger = new Logger(TrendsService.name);
  public krw = { currency: 'KRW', price: 1200 };
  constructor(
    private readonly httpService: HttpService,
    private readonly trendRepository: TrendRepository,
  ) {
    // this.getCoinList();
  }

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

  @Interval(180000)
  async getCoinList(): Promise<boolean> {
    console.log(
      `현재시각 ${new Date().getHours()}시 ${new Date().getMinutes()}분 갱신되었습니다.`,
    );

    const { data } = await firstValueFrom(
      this.httpService.get(`coins/markets?vs_currency=KRW&per_page=100`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new BadGatewayException('Unable to get coin list', {
            cause: new Error(),
            description: 'Coingecko Error',
          });
        }),
      ),
    );

    await data.forEach((v) => {
      this.updateCoinInfomation(v.symbol, {
        rank: v.market_cap_rank,
        price: v.current_price,
        changePercent: v.price_change_percentage_24h,
      });
    });

    return true;
  }

  async updateCoinInfomation(symbol: string, updateTrendDto: UpdateTrendDto) {
    try {
      if (!(await this.trendRepository.update(symbol, updateTrendDto)))
        throw new ForbiddenException('Failed to update data', {
          cause: new Error(),
          description: 'Failed to update data',
        });
      return true;
    } catch (error) {
      throw error;
    }
  }

  // sort = price | rank | name
  async getCoinInfomation(sort = 'rank', count = 10): Promise<ICoinList[]> {
    const coinData = await this.trendRepository.find(sort, count);
    const response: ICoinList[] = coinData.map((v) => ({
      rank: v.rank,
      name: v.name,
      symbol: v.symbol,
      image: v.image,
      changePercent: v.changePercent,
      coinPrice: [
        { currency: this.krw.currency, price: v.price },
        {
          currency: 'USD',
          price: Math.floor((v.price / this.krw.price) * 1000) / 1000,
        },
      ],
    }));
    return response;
  }

  async getTokenData({ symbol }): Promise<ICoinInfo> {
    if (symbol.toLowerCase() === 'agor') symbol = 'arb';
    return await this.trendRepository.findOne(symbol);
  }

  async getTokenList({ tokens }: ListTokensDto) {
    const symbolList = tokens.map((v) => v.symbol.toLowerCase());

    const response = await Promise.all(
      symbolList.map(async (v) => {
        const data = await this.trendRepository.findWithOptions({
          symbol: v,
          options: {
            _id: 0,
            name: 1,
            image: 1,
            currency: 1,
            price: 1,
            symbol: 1,
          },
        });
        const check = this.checkResponse(data);
        return { ...check, symbol: v };
      }),
    );

    return await Promise.all(
      response.map((value, index) => {
        const [result] = response.filter(
          (_, i) => value.symbol === tokens[i].symbol.toLowerCase(),
        );
        if (!Number.isInteger(tokens[index].amount)) {
          tokens[index].amount = Number(tokens[index].amount.toFixed(3));
        }
        return {
          tokenImg: result.image,
          assets: [
            {
              amount: tokens[index].amount,
              currency: result.symbol.toUpperCase(),
            },
            {
              amount: Number((tokens[index].amount * result.price).toFixed(3)),
              currency: result.currency,
            },
          ],
        };
      }),
    );
  }

  checkResponse(data) {
    if (!data || data === null || data.length === 0) {
      return {
        name: '',
        symbol: '',
        image: `sample` + Math.floor(Math.random() * 10) + '.jpg',
        currency: 'KRW',
        price: 0,
      };
    }

    const [result] = data;
    return result;
  }
}

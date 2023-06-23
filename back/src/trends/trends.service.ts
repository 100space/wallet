import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ITrends } from '../interface/trends.interface';

@Injectable()
export class TrendsService {
  private readonly logger = new Logger(TrendsService.name);
  constructor(private readonly httpService: HttpService) {}

  returnData = (data: ITrends[]) => {
    return data.map((v, i) => ({
      rank: i,
      id: v.id,
      name: v.name,
      symbol: v.symbol,
      image: v.image,
      price: v.current_price,
      changePercent: v.price_change_percentage_24h,
    }));
  };

  async getTrendCoins(): Promise<ITrends[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<ITrends[]>(
          'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en',
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'Coin Gecko Error';
          }),
        ),
    );

    return this.returnData(data);
  }

  async getCoin(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`coins/${id}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Coin Gecko Error';
        }),
      ),
    );

    const description = data.description.ko.replace(/\r\n/g, '');

    const res = {
      name: data.name,
      rank: data.coingecko_rank,
      price: data.market_data.current_price.usd,
      changePercent: data.market_data.price_change_percentage_24h,
      marketCap: data.market_data.market_cap.usd,
      totalSupply: data.market_data.total_supply,
      maxSupply: data.market_data.max_supply,
      circulatingSupply: data.market_data.circulating_supply,
      description,
    };

    return res;
  }
}

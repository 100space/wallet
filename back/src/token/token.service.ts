import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Web3Service } from '../web3/web3.service';

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);
  private readonly baseUrl = 'https://api.coingecko.com/api/v3';
  constructor(
    private readonly httpService: HttpService,
    private readonly web3: Web3Service,
  ) {}

  async getTokenBalance({ assets, account }) {
    const coin = await Promise.all(
      assets
        .filter((value) => value.type === 'coin')
        .map(async (value) => {
          const balance = await this.web3.getBalance(value.ca);
          return { type: value.type, balance };
        }),
    );

    const token = await Promise.all(
      assets
        .filter((value) => value.type === 'token')
        .map(async (value) => {
          const tokenBalance = await this.web3.getTokenBalance({
            contractAddress: value.ca,
            account,
          });
          return { type: value.type, ...tokenBalance };
        }),
    );

    return { assets: [...coin, ...token] };
  }

  async getToken({ contractAddress }) {
    try {
      const { data } = await firstValueFrom(
        this.httpService
          .get(`${this.baseUrl}/coins/ethereum/contract/${contractAddress}`)
          .pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw error.response?.data;
            }),
          ),
      );

      return { image: data.image.large };
    } catch (error) {
      if (error?.response?.data?.error === 'coin not found') {
        return { image: 'no image' };
      }
      throw new Error(error?.response?.data?.message || 'Unknown error');
    }
  }
}

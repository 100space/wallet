import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { error } from 'console';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);
  private readonly baseUrl = 'https://api.coingecko.com/api/v3';
  constructor(private readonly httpService: HttpService) {}

  async addToken({ networkInfo, ca, symbol, decimal }) {
    if (networkInfo.chainId === 1) {
      const {
        data: {
          image: { large: image },
        },
      } = await firstValueFrom(
        this.httpService
          .get(`${this.baseUrl}/coins/ethereum/contract/${ca}`)
          .pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw new NotFoundException(
                '/coins/{id}/contract/{contract_address}',
                { cause: new Error(), description: 'Coingecko Error' },
              );
            }),
          ),
      );
      return { image };
    }

    // const { data } = await firstValueFrom(
    //   this.httpService.get(`coins/ethereum/contract/${ca}`),
    // );

    // console.log(data);

    return { ca, symbol, decimal };
  }
}

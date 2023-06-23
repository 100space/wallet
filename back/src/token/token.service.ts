import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);
  constructor(private readonly httpService: HttpService) {}

  async getToken({ contractAddress }) {
    const { data } = await firstValueFrom(
      this.httpService.get(`coins/ethereum/contract/${contractAddress}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Coin Gecko Error';
        }),
      ),
    );

    return { image: data.image };
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { TokenRepository } from './token.repository';
import { AddTokenDto } from './dto';

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);
  private readonly baseUrl = 'https://api.coingecko.com/api/v3';
  constructor(
    private readonly httpService: HttpService,
    private readonly tokenRepository: TokenRepository,
  ) {}

  async addToken({ networkInfo, ca, symbol, decimal }: AddTokenDto) {
    const response = await this.tokenRepository.findOne({ ca });
    if (response === null) {
      if (networkInfo.chainId === 1) {
        const { image } = await this.findImageFromCoingecko({ ca });
        const response = this.tokenRepository.create({
          ca,
          symbol,
          decimal,
          image,
        });
        return response;
      }

      const response = this.tokenRepository.create({
        ca,
        symbol,
        decimal,
        image: `image` + Math.floor(Math.random() * 10),
      });
      return response;
    }

    return response;
  }

  async findImageFromCoingecko({ ca }) {
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
}

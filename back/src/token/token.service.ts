import { HttpService } from '@nestjs/axios';
import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
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
    try {
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
          image:
            `${process.env.DEFAULT_TOKEN_URL}` +
            `${Math.floor(Math.random() * 5) + 1}` +
            `.png`,
        });
        return response;
      }

      return response;
    } catch (error) {
      throw new InternalServerErrorException('Unable to add token', {
        cause: new Error(),
        description: 'Add Token Error',
      });
    }
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
            throw new BadGatewayException('Unable to get token image', {
              cause: new Error(),
              description: 'Coingecko Error',
            });
          }),
        ),
    );
    return { image };
  }
}

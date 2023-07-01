import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { TokenService } from './token.service';
import { IsERC20 } from 'src/decorator/ERC20';
import { NetworkValidationInterceptor } from '../interceptor/NetworkValid';

@Controller('token')
@UseInterceptors(NetworkValidationInterceptor)
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  addToken(@IsERC20() { networkInfo, ca, symbol, decimal }) {
    return this.tokenService.addToken({ networkInfo, ca, symbol, decimal });
  }
}

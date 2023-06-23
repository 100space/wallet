import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.coingecko.com/api/v3/',
    }),
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}

import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { HttpModule } from '@nestjs/axios';
import { Web3Module } from '../web3/web3.module';
import { TokenSchema, Token } from '../schemas/token.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenRepository } from './token.repository';

@Module({
  imports: [
    HttpModule,
    Web3Module,
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
  ],
  controllers: [TokenController],
  providers: [TokenService, TokenRepository],
})
export class TokenModule {}

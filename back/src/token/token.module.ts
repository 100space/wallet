import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { HttpModule } from '@nestjs/axios';
import { Web3Module } from '../web3/web3.module';
import { MongooseModule } from "@nestjs/mongoose";
import { Token, TokenSchema } from "src/schemas/token.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]), HttpModule, Web3Module],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule { }

import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { HttpModule } from '@nestjs/axios';
import { Web3Module } from 'src/web3/web3.module';

@Module({
  imports: [HttpModule, Web3Module],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}

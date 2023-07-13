import { Module } from '@nestjs/common';
import Web3 from 'web3';
import { Web3Service } from './web3.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: 'Web3',
      useValue: new Web3(`${process.env.MUMBAI_NETWORK}`),
    },
    Web3Service,
  ],
  exports: [Web3Service],
})
export class Web3Module {}

import { Module } from '@nestjs/common';
import Web3 from 'web3';
import { Web3Service } from './web3.service';

@Module({
  providers: [
    {
      provide: 'Web3',
      useValue: new Web3('http://127.0.0.1:8545'),
    },
    Web3Service,
  ],
  exports: [Web3Service],
})
export class Web3Module {}

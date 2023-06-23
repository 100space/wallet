import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';
import { Web3Module } from '../web3/web3.module';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Web3Module],
      providers: [TransactionService],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

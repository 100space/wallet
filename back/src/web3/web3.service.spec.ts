import { Test, TestingModule } from '@nestjs/testing';
import { Web3Service } from './web3.service';
import { Web3Module } from './web3.module';

describe('Web3Service', () => {
  let service: Web3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Web3Module],
      providers: [
        Web3Service,
        {
          provide: 'Web3',
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<Web3Service>(Web3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

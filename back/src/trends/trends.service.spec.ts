import { Test, TestingModule } from '@nestjs/testing';
import { TrendsService } from './trends.service';
import { HttpModule } from '@nestjs/axios';

describe('TrendsService', () => {
  let service: TrendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [TrendsService],
    }).compile();

    service = module.get<TrendsService>(TrendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

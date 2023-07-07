import { Test, TestingModule } from '@nestjs/testing';
import { TrendsService } from './trends.service';
import { HttpModule } from '@nestjs/axios';
import { TrendRepository } from './trends.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Trend, TrendSchema } from '../schemas/trend.schema';

describe('TrendsService', () => {
  let service: TrendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        TrendsService,
        TrendRepository,
        { provide: getModelToken(Trend.name, 'local'), useValue: TrendSchema },
      ],
    }).compile();

    service = module.get<TrendsService>(TrendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

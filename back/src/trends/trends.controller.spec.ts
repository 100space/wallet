import { Test, TestingModule } from '@nestjs/testing';
import { TrendsController } from './trends.controller';
import { TrendsService } from './trends.service';
import { HttpModule } from '@nestjs/axios';
import { TrendRepository } from './trends.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Trend, TrendSchema } from '../schemas/trend.schema';

describe('TrendsController', () => {
  let controller: TrendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TrendsController],
      providers: [
        TrendsService,
        TrendRepository,
        { provide: getModelToken(Trend.name, 'local'), useValue: TrendSchema },
      ],
    }).compile();

    controller = module.get<TrendsController>(TrendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TrendsController } from './trends.controller';
import { TrendsService } from './trends.service';
import { HttpModule } from '@nestjs/axios';

describe('TrendsController', () => {
  let controller: TrendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TrendsController],
      providers: [TrendsService],
    }).compile();

    controller = module.get<TrendsController>(TrendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

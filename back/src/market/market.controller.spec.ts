import { Test, TestingModule } from '@nestjs/testing';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { MarketRepository } from './market.repository';
import { Collection, CollectionSchema } from '../schemas/collections.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Event, EventSchema } from '../schemas/events.schema';
import { HttpModule } from '@nestjs/axios';
import { TrendsService } from '../trends/trends.service';
import { forwardRef } from '@nestjs/common';

describe('MarketController', () => {
  let controller: MarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [MarketController],
      providers: [
        {
          provide: MarketService,
          useFactory: () => forwardRef(() => MarketService),
        },
        MarketRepository,
        {
          provide: TrendsService,
          useFactory: () => forwardRef(() => TrendsService),
        },
        {
          provide: getModelToken(Collection.name, 'market'),
          useValue: CollectionSchema,
        },
        { provide: getModelToken(Event.name, 'market'), useValue: EventSchema },
      ],
    }).compile();

    controller = module.get<MarketController>(MarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

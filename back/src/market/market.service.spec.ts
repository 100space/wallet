import { Test, TestingModule } from '@nestjs/testing';
import { MarketService } from './market.service';
import { HttpModule } from '@nestjs/axios';
import { MarketRepository } from './market.repository';
import { TrendsService } from '../trends/trends.service';
import { getModelToken } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from '../schemas/collections.schema';
import { EventSchema, Event } from '../schemas/events.schema';
import { forwardRef } from '@nestjs/common';

describe('MarketService', () => {
  let service: MarketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
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

    service = module.get<MarketService>(MarketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

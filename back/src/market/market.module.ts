import { Module } from '@nestjs/common';
import { MarketService } from './market.service';
import { MarketController } from './market.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from '../schemas/collections.schema';
import { MarketRepository } from './market.repository';
import { ethers } from 'ethers';
import { TrendsModule } from '../trends/trends.module';
import { HttpModule } from '@nestjs/axios';
import { Event, EventSchema } from '../schemas/events.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Collection.name, schema: CollectionSchema },
        { name: Event.name, schema: EventSchema },
      ],
      'market',
    ),
    HttpModule,
    TrendsModule,
  ],
  controllers: [MarketController],
  providers: [
    MarketService,
    MarketRepository,
    {
      provide: 'Provider',
      useValue: new ethers.JsonRpcProvider(process.env.MUMBAI_NETWORK),
    },
  ],
})
export class MarketModule {}

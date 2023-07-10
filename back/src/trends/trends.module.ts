import { Module } from '@nestjs/common';
import { TrendsService } from './trends.service';
import { TrendsController } from './trends.controller';
import { HttpModule } from '@nestjs/axios';
import { Trend, TrendSchema } from '../schemas/trend.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TrendRepository } from './trends.repository';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.coingecko.com/api/v3/',
    }),
    MongooseModule.forFeature(
      [{ name: Trend.name, schema: TrendSchema }],
      'local',
    ),
  ],
  controllers: [TrendsController],
  providers: [TrendsService, TrendRepository],
  exports: [TrendsService],
})
export class TrendsModule {}

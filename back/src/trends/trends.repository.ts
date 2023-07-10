import { Trend } from '../schemas/trend.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTrendDto } from './dto/create-trend.dto';
import { UpdateTrendDto } from './dto/update-trend.dto';

@Injectable()
export class TrendRepository {
  constructor(
    @InjectModel(Trend.name, 'local') private trendModel: Model<Trend>,
  ) {}

  async create(createTrendDto: CreateTrendDto) {
    try {
      await this.trendModel.create(createTrendDto);
      return true;
    } catch (error) {
      console.log('Create Error', error.message);
      return false;
    }
  }

  async update(symbol, updateTrendDto: UpdateTrendDto) {
    try {
      await this.trendModel.findOneAndUpdate(
        { symbol },
        { $set: updateTrendDto },
      );
      return true;
    } catch (error) {
      console.log('Update Error', error.message);
      return false;
    }
  }

    async findOne(symbol: string) {
        return await this.trendModel.findOne({ symbol });
    }

    async find(sort: string, count: number) {
        const sortOption = {}
        sortOption[sort] = 1
        return await this.trendModel.find().sort(sortOption).limit(count).select('rank name symbol image changePercent price');
    }
}

import { Trend } from '../schemas/trend.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTrendDto } from './dto/create-trend.dto';
import { UpdateTrendDto } from './dto/update-trend.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TrendRepository {
  constructor(
    @InjectModel(Trend.name, 'local') private trendModel: Model<Trend>,
    private configService: ConfigService,
  ) {
    // this.initiate();
  }

  async initiate() {
    try {
      await this.trendModel.deleteMany({});
      const basicData = this.configService.get('trendDatas');
      if (!(await this.create(basicData)))
        throw new ForbiddenException('Failed to create basicData', {
          cause: new Error(),
          description: 'Failed to create basicData',
        });
    } catch (error) {
      throw error;
    }
  }

  async create(createTrendDto: CreateTrendDto | CreateTrendDto[]) {
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
    const sortOption = {};
    sort === 'changePercent' || sort === 'price'
      ? (sortOption[sort] = -1)
      : (sortOption[sort] = 1);
    return await this.trendModel
      .find()
      .sort(sortOption)
      .limit(count)
      .select('rank name symbol image changePercent price');
  }
  async findWithOptions({ symbol, options }) {
    const result = await this.trendModel
      .find({ symbol }, { ...options })
      .lean();
    return result;
  }
}

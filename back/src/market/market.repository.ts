import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection } from 'src/schemas/collections.schema';

@Injectable()
export class MarketRepository {
  constructor(
    @InjectModel(Collection.name) private marketModel: Model<Collection>,
  ) {}

  async findAll() {
    const response = await this.marketModel
      .find(
        {},
        { _id: 0, address: 1, name: 1, symbol: 1, description: 1, logo: 1 },
      )
      .lean();
    return response;
  }
}

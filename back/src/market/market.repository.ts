import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection } from '../schemas/collections.schema';
import { Event } from '../schemas/events.schema';

@Injectable()
export class MarketRepository {
  constructor(
    @InjectModel(Collection.name, 'market')
    private collectionModel: Model<Collection>,
    @InjectModel(Event.name, 'market') private eventModel: Model<Event>,
  ) { }

  async findAll(page: number) {
    return await this.collectionModel
      .find(
        {},
        { _id: 0, address: 1, name: 1, symbol: 1, description: 1, logo: 1, floorPrice: 1, favorite: 1, createdAt: 1 },
      )
      .skip((page - 1) * 10)
      .limit(10)
      .sort({ updatedAt: -1 })
      .lean();
  }

  async findTransaction({ ca, tokenId }) {
    return await this.eventModel
      .find({ NFTaddress: ca, tokenId }, { _id: 0, __v: 0 })
      .lean();
  }

  async findOne({ ca }) {
    return await this.collectionModel
      .findOne({ address: ca }, { _id: 0, creator: 1, name: 1, symbol: 1 })
      .lean();
  }
}

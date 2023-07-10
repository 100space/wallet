import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NetWork } from '../schemas/network.schema';
import { CreateNetworkDto } from './dto/create-network.dto';

@Injectable()
export class NetWorkRepository {
  constructor(
    @InjectModel(NetWork.name, 'local') private networkModel: Model<NetWork>,
  ) {}

  async create(createNetworkDto: CreateNetworkDto) {
    const result = await this.networkModel.create(createNetworkDto);
    return true;
  }

  async findOne(name: string) {
    return await this.networkModel.findOne({ name });
  }

  async findAll() {
    return await this.networkModel.find();
  }
}

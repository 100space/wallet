import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from '../schemas/token.schema';
import { CreateTokenDto } from './dto';

@Injectable()
export class TokenRepository {
  constructor(
    @InjectModel(Token.name, 'local') private tokenModel: Model<Token>,
  ) {}

  create({ ca, symbol, decimal, image }: CreateTokenDto) {
    const response = new this.tokenModel({ ca, symbol, decimal, image });
    response.save();
    return { ca, symbol, decimal, image };
  }

  async findOne({ ca }) {
    const response = await this.tokenModel.findOne({ ca }, { _id: 0, __v: 0 });
    return response;
  }

  async findOrCreate({ ca, symbol, decimal, image }) {
    const response = await this.tokenModel.findOne({ ca }, { _id: 0, __v: 0 });
    if (response === null) {
      const result = new this.tokenModel({ ca, symbol, decimal, image });
      result.save();
      return { ca, symbol, decimal, image };
    }
    return response;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from 'src/schemas/token.schema';

@Injectable()
export class TokenRepository {
  constructor(@InjectModel(Token.name) private tokenModel: Model<Token>) {}
}

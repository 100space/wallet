import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TokenDocument = HydratedDocument<Token>;

@Schema()
export class Token {
  @Prop({ required: true, unique: true })
  ca: string;

  @Prop({ required: true, unique: true })
  symbol: string;

  @Prop({ required: true })
  decimal: number;

  @Prop({ required: true })
  image: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);

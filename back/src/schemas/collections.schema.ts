import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

export class Collection {
  address: string;

  creator: string;

  name: string;

  symbol: string;

  description: string;

  url: string;

  creatorFee: string;

  floorPrice: number;

  totalVolume: number;

  totalSales: number;

  verified: boolean;

  logo: string;

  createdAt: Date;

  updatedAt: Date;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);

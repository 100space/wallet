import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

export class Event {
  id: number;

  from: string;

  to: string;

  NFTaddress: string;

  tokenId: number;

  price: number;

  krwPrice: string;

  event: string;

  createdAt: Date;

  updatedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
    @Prop({ required: true, unique: true })
    address: string

    @Prop({ required: true })
    nickname: string

    @Prop({ default: '' })
    image: string
}

export const AccountSchema = SchemaFactory.createForClass(Account);
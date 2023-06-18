import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ExampleDocument = HydratedDocument<Example>;

@Schema()
export class Example {
    @Prop({ required: true, unique: true })
    address: string;

    @Prop()
    imgUrl: string;

    @Prop()
    nickname: string;
}

export const UserSchema = SchemaFactory.createForClass(Example);
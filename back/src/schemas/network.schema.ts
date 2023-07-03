import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NetWorkDocument = HydratedDocument<NetWork>;

@Schema()
export class NetWork {
    @Prop({ required: true, unique: true })
    name: string
    
    @Prop({ required: true, unique: true })
    networkUrl: string
    
    @Prop({ required: true, unique: true })
    chainId: number
    
    @Prop({ required: true, unique: true })
    symbol: string
}

export const NetWorkSchema = SchemaFactory.createForClass(NetWork);
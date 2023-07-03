import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NetWorkListDocument = HydratedDocument<NetWorkList>;

@Schema()
export class NetWorkList {
    @Prop({ required: true, unique: true })
    address: string

    @Prop({ default: ["ethereurm", "arbitrum", "polygon", "goerli"]})
    networkList: string[]
}

export const NetWorkListSchema = SchemaFactory.createForClass(NetWorkList); 
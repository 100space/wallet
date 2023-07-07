import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ExchangeDocument = HydratedDocument<Exchange>;

@Schema()
export class Exchange {
    @Prop({ require: true })
    result: string

    @Prop({ require: true })
    cur_unit: string

    @Prop({ require: true })
    ttb: string

    @Prop({ require: true })
    tts: string

    @Prop({ require: true })
    deal_bas_r: string

    @Prop({ require: true })
    bkpr: string

    @Prop({ require: true })
    yy_efee_r: string

    @Prop({ require: true })
    ten_dd_efee_r: string

    @Prop({ require: true })
    kftc_bkpr: string

    @Prop({ require: true })
    kftc_deal_bas_r: string

    @Prop({ require: true })
    cur_nm: string

}

export const ExchangeSchema = SchemaFactory.createForClass(Exchange);
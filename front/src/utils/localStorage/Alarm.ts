import { ITx } from "@utils/interFace/block.interface";
import { atom } from "recoil";

export const AlarmData = atom({
    key: "alarmTxData",
    default: [] as ITx[],
})

export const ExchangePrice = atom({
    key: "exchange",
    default: 0,
})

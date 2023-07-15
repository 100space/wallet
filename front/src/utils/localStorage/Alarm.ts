import { ITx } from "@utils/interFace/block.interface";
import { atom } from "recoil";

export const AlarmData = atom({
    key: "alarmTxData",
    default: [] as ITx[],
})

export const AlarmDataByAddress = atom({
    key: "alarmTxDataByAddress",
    default: [] as ITx[],
})

export const ExchangePrice = atom({
    key: "exchange",
    default: 0,
})

export const CurrentTxData = atom({
    key: "currentTxData",
    default: [],
})

export const IsAlarm = atom({
    key: "isAlarm",
    default: false,
})
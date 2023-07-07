import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TrendDocument = HydratedDocument<Trend>;

@Schema()
export class Trend {
    @Prop({ required: true })
    name: string

    @Prop({ required: true, unique: true, index: true })
    symbol: string

    @Prop({ required: true })
    rank: number

    @Prop({ required: false })
    marketCap: number

    @Prop({ required: false })
    totalSupply: number

    @Prop({ required: false })
    maxSupply: number

    @Prop({ required: false })
    circulatingSupply: number

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    image: string

    @Prop({ required: true })
    changePercent: number

    @Prop({ required: true })
    currency: string

    @Prop({ required: true })
    price: number

}

export const TrendSchema = SchemaFactory.createForClass(Trend);

// {
//     "name": "Ethereum",
//     "symbol": "eth",
//     "rank": 2,
//     "marketCap": 302830157259497,
//     "totalSupply": 120219082.757286,
//     "maxSupply": null,
//     "circulatingSupply": 120219082.757286,
//     "description": "이더리움(Ethereum/ETH)은 블록체인 기술에 기반한 클라우드 컴퓨팅 플랫폼 또는 프로그래밍 언어이다. 비탈릭 부테린이 개발하였다.비탈릭 부테린은 가상화폐인 비트코인에 사용된 핵심 기술인 블록체인(blockchain)에 화폐 거래 기록뿐 아니라 계약서 등의 추가 정보를 기록할 수 있다는 점에 착안하여, 전 세계 수많은 사용자들이 보유하고 있는 컴퓨팅 자원을 활용해 분산 네트워크를 구성하고, 이 플랫폼을 이용하여 SNS, 이메일, 전자투표 등 다양한 정보를 기록하는 시스템을 창안했다. 이더리움은 C++, 자바, 파이썬, GO 등 주요 프로그래밍 언어를 지원한다.이더리움을 사물 인터넷(IoT)에 적용하면 기계 간 금융 거래도 가능해진다. 예를 들어 고장난 청소로봇이 정비로봇에 돈을 내고 정비를 받고, 청소로봇은 돈을 벌기 위해 정비로봇의 집을 청소하는 것도 가능해진다.",
//     "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
//     "changePercent": -0.87763,
//     "currency": "KRW",
//     "price": 2519022
// }
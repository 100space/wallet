import { ISizeProps, ITypeSize } from "./styled.interface"

export type coinId = string
export type coinName = string
export type coinSymbol = string
export type url = string
export type currency = string
export type coinRate = number
export type coinRank = number
export type price = number

// 기본 코인 정보 icoincarheader
export interface ICoinName extends ITypeSize {
    id?: coinId
    name: coinName
    symbol: coinSymbol
    image: url
}

// currency, price는 KRW 기준
export interface ICoinPrice extends ISizeProps {
    currency: currency
    price: price
}


// [0] = krw
// [1] = usd
export type TCoinPrice = ICoinPrice[]

export interface ICoinRate extends ISizeProps {
    changePercent: coinRate
}

export interface ICoinRank extends ISizeProps {
    rank: coinRank
}

export interface ICoin extends ICoinName, ICoinRate, ICoinRank {
    coinPrice: TCoinPrice
}

// 코인 카드
// KRW와 USD 둘다 들어감
// export class ICoinCard implements ICoinName, ICoinRank, ICoinRate, ICoinPrice {
//     usdCurrency: string
//     usdPrice: number
// }

export type TCoinInfoRow = (string | number)[]

export interface ICoinInfoRow extends ITypeSize {
    content: TCoinInfoRow
}

// 코인 정보 페이지
export interface ICoinInfo extends ICoinName, ICoinRank, ICoinRate, ICoinPrice {
    marketCap: number
    totalSupply: number
    maxSupply: number
    circulatingSupply: number
    description: string
}


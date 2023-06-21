import { ISizeProps, ITypeSize } from "./styled.interface"

export type coinId = string
export type coinName = string
export type coinSymbol = string
export type url = string
export type coinRate = number
export type coinRank = number
export type currency = string
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

export interface ICoinRate extends ISizeProps {
    changePercent: coinRate
}

export interface ICoinRank extends ISizeProps {
    rank: coinRank
}

export interface ICoinRow extends ICoinName, ICoinRate, ICoinRank, ICoinPrice {}

// 코인 정보 페이지
export interface ICoinInfo extends ICoinName, ICoinRank, ICoinRate, ICoinPrice {
    marketCap: number
    totalSupply: number
    maxSupply: number
    circulatingSupply: number
    description: string
}


// 코인 카드
// KRW와 USD 둘다 들어감
export interface ICoinCard extends ICoinName, ICoinRank, ICoinRate, ICoinPrice {
    usdCurrency: string
    usdPrice: number
}



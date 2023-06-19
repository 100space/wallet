export type address = string
export type hash = string
export type Wallet = Account[]

export interface Account {
    privateKey: hash
    publicKey: hash
    address: address
}

export interface IPriceCard {
    currency: string
    price: number
}

export interface ITrendCardHeader {
    symbol: string
    name: string
    image: string
}

export interface ITrendCardData extends ITrendCardHeader {
    usdPrice: number
    krwPrice: number
    changePercent: number
}

export interface ITrendCard {
    props: ITrendCardData
}

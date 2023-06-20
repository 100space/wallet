export type address = string
export type hash = string
export type Wallet = Account[]
export type ModeState = [string, React.Dispatch<React.SetStateAction<string>>]

export interface Account {
    privateKey: hash
    publicKey: hash
    address: address
}

export interface IPriceCard {
    currency: string
    price: number
}

export interface ICoinCardHeader {
    symbol: string
    name: string
    image: string
}

export interface ICoinCardData extends ICoinCardHeader {
    usdPrice: number
    krwPrice: number
    changePercent: number
}

export interface ICoinCard {
    props: ICoinCardData
}

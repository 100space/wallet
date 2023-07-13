import { ISizeProps } from "./styled.interface"

export interface INFTInfo {
    ca?: string
    name: string
    owner?: string
    nickname?: string
}

export interface INFTPrice {
    currency: string
    price: number
}

export type INFTPrices = INFTPrice[]

export interface INFTImg extends ISizeProps {
    image: string
    className?: string
}

// export interface INFTInfo {
//   ca?: string
//   name: string
//   owner: string
//   descrition?: string
//   marketId?: number
//   nftAddress?: string
//   tokenId?: number
//   isSoldOut?: boolean
// }

export interface INFTContents extends INFTInfo {
    prices: INFTPrices
    collection?: boolean
}

export interface INFTCard extends INFTImg, INFTContents { }

export interface INFTRank {
    rank?: number
}

export interface INFTRow extends INFTCard, INFTRank { }

export interface IBlockChainNetWork {
    name: string
    image: string
}

export interface IContent {
    subject: string
    value: string | number | IBlockChainNetWork
}

export interface INFTStauts {
    blockchain: IContent
    supply: IContent
    isTrade: IContent
    isSell: IContent
}

export interface INftInfomation {
    owner: IContent
    blockchain: IContent
    ca: IContent
    tokenId: IContent
    tokenStandard: IContent
    supply: IContent
    isTrade: IContent
}

export interface INFTStandardSubject {
    nftName: string
    tokenId: number
    like: number
}

export interface INFTStandardCreater {
    creator: string
    owner: string
}

export interface INFTStandardCollection {
    collectionName: string
}

export interface INFTStandard extends INFTStandardSubject, INFTStandardCreater, INFTStandardCollection {
    sellPrice: INFTPrice
    fee: INFTPrice
}

export interface INFTCardByMarket {
    name: string
    image: string
    descrition?: string
    marketId?: number
    owner?: string
    nftAddress?: string
    tokenId?: number
    prices: INFTPrice[]
    isSoldOut?: boolean
}

export interface INFTNetworkByMarket {
    name: string
    image: string
}

export interface INFTInfomationByMarket {
    ca: string
    tokenId: number
    nftName: string
    price: INFTPrice
    fee: INFTPrice
    creator: string
    blockchain: INFTNetworkByMarket
    supply: number
    symbol: string
    collectionName: string
    tokenStandard: string
    description: string
    image: string
    owner: string
    isTrade: string
    krw: string
}

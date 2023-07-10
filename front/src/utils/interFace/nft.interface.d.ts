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

export interface INFTContents extends INFTInfo {
    prices: INFTPrices
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
    // blockchain: (string | string[])[]
    // supply: (string | number)[]
    // isTrade: (string | number)[]
    // isSell: (string | number)[]
}

export interface INftInfomation {
    owner: IContent
    blockchain: IContent
    ca: IContent
    tokenId: IContent
    tokenStandard: IContent
    // owner: string[]
    // blockchain: (string | string[])[]
    // ca: string[]
    // tokenId: (number | string)[]
    // tokenStandard: string[]
}

export interface INFTStandardSubject {
    nftName: string
    nftId: number
    like: number
}

export interface INFTStandardOwner {
    ownerImage: string
    owner: string
}

export interface INFTStandardCollection {
    collectionName: string
}

export interface INFTStandard extends INFTStandardSubject, INFTStandardOwner, INFTStandardCollection {
    sellPrice: INFTPrice
    chargePrice: INFTPrice
}

export interface INFTCardByMarket {
    name: string
    image: string
    descrition?: string
    marketId?: string
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
    name: string
    price: INFTPrice
    fee: INFTPrice
    creater: string
    blockchain: INFTNetworkByMarket
    supply: number
    symbol: string
    collectionName: string
    tokenStandard: string
    description: string
    image: string
    owner: string
    isTrade: string
}
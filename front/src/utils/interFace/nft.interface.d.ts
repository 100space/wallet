import { ISizeProps } from "./styled.interface"

export interface INFTPrice {
    currency: string
    price: number
}

export type INFTPrices = INFTPrice[]

export interface INFTImg extends ISizeProps {
    image: string
    className?: string
}

export interface INFTInfo {
    ca?: string
    name: string
    owner: string
}

export interface INFTContents extends INFTInfo {
    prices: INFTPrices
}

export interface INFTCard extends INFTImg, INFTContents {}

export interface INFTRank {
    rank: number
}

export interface INFTRow extends INFTCard, INFTRank {}

export interface INFTStauts {
    blockchain: (string | string[])[]
    supply: (string | number)[]
    isTrade: (string | number)[]
    isSell: (string | number)[]
}

export interface INftInfomation {
    owner: string[]
    blockchain: (string | string[])[]
    ca: string[]
    tokenId: (number | string)[]
    tokenStandard: string[]
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

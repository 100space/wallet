export interface INFTPrice {
    currency: string
    price: number
}

export type INFTPrices = INFTPrice[]

export interface INFTImg {
    image: string
}

export interface INFTInfo {
    ca?: string
    name: string
    owner: string
}

export interface INFTContents extends INFTInfo {
    prices: INFTPrices
}

export interface INFTCard extends INFTImg, INFTContents{}
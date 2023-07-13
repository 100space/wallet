export type address = string

export interface IPrice {
    currency: string
    price: number
}

export interface ITransactionState {
    event: string
}

export interface ITransaction extends ITransactionState {
    id: number
    from: address
    to: address
    ca: address
    tokenId?: number
    createdAt: string
    updatedAt: string
    price: IPrice[]
}
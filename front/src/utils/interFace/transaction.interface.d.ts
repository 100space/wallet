export type address = string
export type receiver = string
export type sender = string

export interface IAmount {
    currency: string
    amount: number
}

export interface ITransactionState {
    state: receiver | sender
}

export interface ITransaction extends ITransactionState {
    opponent: address
    timestamp: string
    network?: string
    amounts: IAmount[]
}
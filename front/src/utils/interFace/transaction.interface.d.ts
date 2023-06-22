export type address = string
export type receiver = string
export type sender = string

export interface IAmount {
    currency: string
    amount: number
}

export interface ITransaction {
    status: receiver | sender
    opponent: address
    timestamp: string
    network?: string
    amounts: IAmount[]
}
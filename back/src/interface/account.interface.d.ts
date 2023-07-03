export type Mnemonic = string[]

export interface IAccount {
    privateKey: string
    publicKey: string
    address: string
}

export type IAddress = {
    address: string
}

export type IUser = {
    address: string
    nickname: string
    image?: string
}

export type IMnemonic = {
    mnemonic: Mnemonic
}
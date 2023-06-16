export type address = string
export type hash = string
export type Wallet = Account[]

export interface Account {
    privateKey: hash
    publicKey: hash
    address: address
}
export interface IinputComp {
    width: number
    height: number
    type?: string
    placeholder?: string
}

export interface InputWrapProps {
    width?: number
    height: number
    type?: string
    focusmode?: string
}

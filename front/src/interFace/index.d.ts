export type address = string
export type hash = string
export type Wallet = Account[]

export interface Account {
    privateKey: hash
    publicKey: hash
    address: address
}

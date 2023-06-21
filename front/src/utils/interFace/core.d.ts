export type address = string
export type hash = string
export type Wallet = Account[]
export type ModeState = [string, React.Dispatch<React.SetStateAction<string>>]

export interface IDescripList {
    [key: string]: {
        subject: string
        content: string
    }
}

export interface Account {
    privateKey: hash
    publicKey: hash
    address: address
}
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
export interface IMnemonic {
    mnemonic: string[]
}

export interface Account {
    privateKey: hash
    publicKey: hash
    address: address
}

export interface IfooterList {
    path: string
    iconPath: string
    content: string
}

export interface IStepProps {
    [key: string]: number
}

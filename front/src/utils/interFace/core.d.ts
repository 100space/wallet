import { MouseEvent } from "react"

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

export interface IMatched {
    [key?: string]: {
        content?: string
        text?: string
    }
}
export interface IStepProps {
    [key: string]: number
}

export interface IAccountRow {
    accountImg: string
    address: string
    asset: IAccountAmount
    alias: string
}

export interface IAccountAmount {
    amount: number
    currency: string
}

export interface ITokenRow {
    tokenImg: string
    assets: IAccountAmount[]
}

export interface IClickHandler {
    onClick: (e: MouseEvent) => void
}
export interface InputList {
    subject: string
    content: string
    tokenTitle?: string
    nftTitle?: string
    className?: string
    address?: string
    value?: string
}

export interface ISizeProps {
    width?: string | number
    height?: string | number
    mode?: string
}
export interface ITypeSize extends ISizeProps {
    type?: string
    name?: string
}
export interface IPlaceTypeSize extends ITypeSize {
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface IFocusTypeSize extends ITypeSize {
    focusmode?: string
}

export interface ICoin extends ITypeSize {
    rank?: number
    coinImg?: string
    name?: string
    symbol?: string
    price?: number
    rate?: number
}

export interface ICoinData {
    coinData: ICoinRow
}

export interface walletInfo {
    imgPath: string
    content: string
}

export interface IBtn {
    width: string
    height: string
    margin?: string
    backgroundColor?: string
    content?: string
    mode: string
    onClick?: (e) => void
}

interface Idescription {
    subject: string
    content: string
}

export interface ISizeProps {
    width?: string | number
    height?: string | number
    mode?: string
}
export interface ITypeSize extends ISizeProps {
    type?: string
}
export interface IPlaceTypeSize extends ITypeSize {
    placeholder?: string
}
export interface IFocusTypeSize extends ITypeSize {
    focusmode?: string
}

export interface ICoinRow extends ISizeProps {
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
    width: string,
    height: string,
    margin?: string,
    backgroundColor: string,
    content?: string,
}

interface Idescription {
    subject: string
    content: string
} 

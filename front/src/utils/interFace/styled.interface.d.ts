export interface ISizeProps {
    width?: string | number
    height?: string | number
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
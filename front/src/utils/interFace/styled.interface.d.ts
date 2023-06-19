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
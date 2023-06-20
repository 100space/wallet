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

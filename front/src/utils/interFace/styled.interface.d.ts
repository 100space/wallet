import { ReactNode } from "react"

export interface ISizeProps {
    width?: string | number
    height?: string | number
    mode?: string
}

/**
 * 팝업을 위한 Interfacce
 * @type state :  팝업을 컨트롤할 때 boolean 값으로 컨트롤 한다.
 */
export interface IStateProps extends ISizeProps {
    popUpState?: boolean
    sideBarState?: boolean
}
export interface ITypeSize extends ISizeProps {
    type?: string
    name?: string
}
export interface IPlaceTypeSize extends ITypeSize {
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface IFocusTypeSize extends ITypeSize {
    focusmode?: string
}

export interface IBtn {
    width: string
    height: string
    margin?: string
    backgroundColor?: string
    content?: string
    fontSize?: string
    mode: string
    children?: string | ReactNode
    onClick?: (e) => void
}

interface Idescription {
    subject: string
    content: string
}

export interface TextProps extends ISizeProps {
    fontSize: string
    step?: string
}

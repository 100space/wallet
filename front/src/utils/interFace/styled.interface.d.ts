import { ReactNode } from "react"

export interface ISizeProps {
    width?: string | number
    height?: string | number
    mode?: string
}

/**
 * 팝업을 위한 Interfacce
 * @type popUpState :  팝업을 컨트롤할 때 boolean 값으로 컨트롤 한다.
 * @type sidebarstate :  사이드바를 컨트롤할 때 boolean 값으로 컨트롤 한다.
 */
export interface IStateProps extends ISizeProps {
    popupstate?: string
    sidebarstate?: string
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
    backgroundcolor?: string
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
    position?: string
}

export interface IHeader extends ISizeProps {
    header?: boolean
}

export interface ISelectedBtn extends ISizeProps {
    selected: boolean
}

export interface ISelectedBtns extends ISizeProps {
    selected: boolean[]
}

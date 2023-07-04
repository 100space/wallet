import { color } from "framer-motion"
import { ReactNode } from "react"

export interface ISizeProps {
    width?: string | number
    height?: string | number
    mode?: string
}
export interface IonClickProps extends ISizeProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    open?: string
}
export interface INFTContent extends ISizeProps {
    types?: string
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
    fontSize?: number
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface IFocusTypeSize extends ITypeSize {
    focusmode?: string
}

export interface IBtn extends IonClickProps {
    width: string
    height: string
    margin?: string
    backgroundcolor?: string
    content?: string
    fontSize?: string
    mode: string
    children?: string | ReactNode
    color?:string
}

export interface IProfileBtn extends IBtn {
    profile?: string
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
    header?: string
}

export interface ISelectedBtn extends ISizeProps {
    selected: boolean
}

export interface ISelectedBtns extends ISizeProps {
    selected: boolean[]
}

export interface IProfileProps extends ISizeProps {
    profile?: string
    profileState?: string
}

import { IClickHandler } from "@utils/interFace/core"
import { ArrowHamburgerWrap, ArrowHamburgerStick } from "./styled/ArrowHamburger.styled"

export const ArrowHamburger = ({ onClick }: IClickHandler) => {
    return (
        <ArrowHamburgerWrap onClick={onClick}>
            <ArrowHamburgerStick></ArrowHamburgerStick>
            <ArrowHamburgerStick></ArrowHamburgerStick>
            <ArrowHamburgerStick></ArrowHamburgerStick>
        </ArrowHamburgerWrap>
    )
}
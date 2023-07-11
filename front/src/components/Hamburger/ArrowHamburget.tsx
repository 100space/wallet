import { IClickHandler } from "@utils/interFace/core"
import { ArrowHamburgerWrap, ArrowHamburgerStick } from "./styled/ArrowHamburger.styled"
import { useGetMode } from "@hooks/useMode"

export const ArrowHamburger = ({ onClick }: IClickHandler) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <ArrowHamburgerWrap mode={modeState.mode} onClick={onClick}>
            <ArrowHamburgerStick mode={modeState.mode}></ArrowHamburgerStick>
            <ArrowHamburgerStick mode={modeState.mode}></ArrowHamburgerStick>
            <ArrowHamburgerStick mode={modeState.mode}></ArrowHamburgerStick>
        </ArrowHamburgerWrap>
    )
}
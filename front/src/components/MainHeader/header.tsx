import { FunctionBtn } from "./fnBtn"
import { HamburgerBtn } from "./hamburger"
import { PathHeader } from "./pathHeader"
import { HeaderWrapper } from "./styled"

export const HeaderWrap = () => {
    return (
        <HeaderWrapper>
            <HamburgerBtn />
            <PathHeader />
            <FunctionBtn />
        </HeaderWrapper>
    )
}

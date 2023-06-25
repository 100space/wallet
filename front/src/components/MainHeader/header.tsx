import { FunctionBtn } from "./fnBtn"
import { HamburgerBtn } from "./hamburger"
import { HeaderWrapper } from "./styled"

export const HeaderWrap = () => {
    return (
        <HeaderWrapper>
            <HamburgerBtn />
            <FunctionBtn />
        </HeaderWrapper>
    )
}

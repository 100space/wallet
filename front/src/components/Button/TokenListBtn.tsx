import { useGetMode } from "@hooks/useMode"
import { TokenListBtnWrap, TokenListButton } from "./styled/Btn.styled"

export const TokenListBtn = ({ children, width }: any) => {
    const [modeState, setModeState] = useGetMode()

    return(
        <TokenListBtnWrap width={width}>
            <TokenListButton mode={modeState.mode}>
                { children }
            </TokenListButton>
        </TokenListBtnWrap>
    )
}
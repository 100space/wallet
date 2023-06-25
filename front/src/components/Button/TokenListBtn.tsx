import { useGetMode } from "@hooks/useMode"
import { TokenListBtnWrap, TokenListButton } from "./styled/Btn.styled"

export const TokenListBtn = ({ children }: any) => {
    const [modeState, setModeState] = useGetMode()

    return(
        <TokenListBtnWrap>
            <TokenListButton mode={modeState.mode}>
                { children }
            </TokenListButton>
        </TokenListBtnWrap>
    )
}
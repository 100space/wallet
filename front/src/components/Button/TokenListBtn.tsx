import { useGetMode } from "@hooks/useMode"
import { TokenListBtnWrap, TokenListButton } from "./styled/Btn.styled"

export const TokenListBtn = ({ children, width }: { children: string; width: string }) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <TokenListBtnWrap width={width}>
            <TokenListButton mode={modeState.mode} height={"5rem"}>
                {children}
            </TokenListButton>
        </TokenListBtnWrap>
    )
}

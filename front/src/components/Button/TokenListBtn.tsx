import { useGetMode } from "@hooks/useMode"
import { TokenListBtnWrap, TokenListButton } from "./styled/Btn.styled"
import { MouseEventHandler } from "react"

export const TokenListBtn = ({
    children,
    width,
    onClick,
}: {
    children: string
    width: string
    onClick: MouseEventHandler<HTMLButtonElement>
}) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <TokenListBtnWrap width={width}>
            <TokenListButton mode={modeState.mode} height={"5rem"} onClick={onClick}>
                {children}
            </TokenListButton>
        </TokenListBtnWrap>
    )
}

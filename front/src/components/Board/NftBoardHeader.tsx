import { useGetMode } from "@hooks/useMode"
import { NftBoardWrap, NftBoardHeaderSubject, NftBoardButton } from "./styled/NftBoard.styled"

export const NftBoardHeader = (props: {text: string[] }) => {
    const [modeState, setModeState] = useGetMode()
    return(
        <NftBoardWrap height={"3.6rem"} mode={modeState.mode} header={true}>
            <NftBoardHeaderSubject mode={modeState.mode}>
                {props.text[0]}
            </NftBoardHeaderSubject>
            <NftBoardButton mode={modeState.mode}>
                {props.text[1]}
            </NftBoardButton>
        </NftBoardWrap>
    )
}
import { useGetMode } from "@hooks/useMode"
import { NftBoardWrap, NftBoardHeaderSubject, NftBoardButton, NftBoardButtonWrap } from "./styled/NftBoard.styled"
import { useLocation } from "react-router"
import { MouseEvent, useEffect } from "react"

export const NftBoardHeader = (props: { text: string[]; onClick: () => void }) => {
    const [modeState, setModeState] = useGetMode()
    const location = useLocation()

    const getIndex = (pathName: string) => {
        const pathArr = pathName.split("/")
        return { ca: pathArr[pathArr.length - 2], tokenId: pathArr[pathArr.length - 1] }
    }

    const clickMoreInformationHandler = (e: MouseEvent) => {
        window.open(`https://mumbai.polygonscan.com/address/${getIndex(location.pathname).ca}`)
    }

    return (
        <NftBoardWrap height={"3.6rem"} mode={modeState.mode} header={"true"}>
            <NftBoardHeaderSubject mode={modeState.mode}>{props.text[0]}</NftBoardHeaderSubject>
            <NftBoardButtonWrap>
                {props.text[2] ? (
                    <NftBoardButton mode={modeState.mode} onClick={clickMoreInformationHandler}>
                        {props.text[props.text.length - 2]}
                    </NftBoardButton>
                ) : (
                    <></>
                )}
                <NftBoardButton mode={modeState.mode} onClick={props.onClick}>
                    {props.text[props.text.length - 1]}
                </NftBoardButton>
            </NftBoardButtonWrap>
        </NftBoardWrap>
    )
}

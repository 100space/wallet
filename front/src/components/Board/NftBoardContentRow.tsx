import { useGetMode } from "@hooks/useMode"
import { ImageForm, Wrapper } from "@styled/index"
import {
    NftBoardContentRowWrap,
    NftBoardContentSubject,
    NftBoardContentForm,
    NftBoardContent,
} from "./styled/Board.styled"
import { IBlockChainNetWork } from "@utils/interFace/nft.interface"
import { useEffect } from "react"
import { Alert } from "@components/Alert/alert"

export const NftBoardContentRow = (props: {
    text: (string | string[])[]
    isImage: IBlockChainNetWork
    open: string
}) => {
    const [modeState, setModeState] = useGetMode()

    const copyHandler = (e: MouseEvent) => {
        const text = (e.target as HTMLElement).title
        navigator.clipboard.writeText(text).then(() => {
            Alert.fire({ title: "클립보드에 복사 되었습니다.", icon: "info" })
        })
    }

    const shorten = (desiredLength: number, middle: string, data: string) => {
        return data.substring(0, desiredLength) + middle + data.substring(data.length - desiredLength, data.length)
    }

    return (
        <NftBoardContentRowWrap mode={modeState.mode} height={"3.6rem"} open={props.open}>
            <NftBoardContentSubject>{props.text[0]}</NftBoardContentSubject>
            {typeof props.isImage !== "boolean" && typeof props.isImage !== "number" && props.isImage ? (
                <NftBoardContentForm>
                    <Wrapper height={"1rem"}>
                        <ImageForm src={props.isImage.image} height={"150%"} />
                    </Wrapper>
                    <NftBoardContent>{props.isImage.name}</NftBoardContent>
                </NftBoardContentForm>
            ) : (
                <NftBoardContentForm>
                    {typeof props.text[1] === "string" && props.text[0] === "토큰 ID" ? (
                        <NftBoardContent title={props.text[1]} onClick={copyHandler}>
                            {props.text[1].length > 30 ? shorten(10, "...", props.text[1]) : props.text[1]}
                        </NftBoardContent>
                    ) : (
                        <NftBoardContent>
                            {typeof props.text[1] === "string" && props.text[1].length === 42
                                ? props.text[1].substring(0, 6) + "..." + props.text[1].substring(38, 42)
                                : props.text[1]}
                            {typeof props.text[1] === "boolean" && props.text[1] ? "거래불가" : ""}
                            {typeof props.text[1] === "boolean" && !props.text[1] ? "거래가능" : ""}
                        </NftBoardContent>
                    )}
                </NftBoardContentForm>
            )}
        </NftBoardContentRowWrap>
    )
}

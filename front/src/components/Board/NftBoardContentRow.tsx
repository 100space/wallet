import { useGetMode } from "@hooks/useMode"
import { ImageForm, Wrapper } from "@styled/index"
import {
    NftBoardContentRowWrap,
    NftBoardContentSubject,
    NftBoardContentForm,
    NftBoardContent,
} from "./styled/Board.styled"
import { IBlockChainNetWork } from "@utils/interFace/nft.interface";
import { useEffect } from "react";

export const NftBoardContentRow = (props: { text: (string | string[])[]; isImage: IBlockChainNetWork; open: string }) => {
    const [modeState, setModeState] = useGetMode()

    console.log(props.text)
    console.log(props.isImage)

    return (
        <NftBoardContentRowWrap mode={modeState.mode} height={"3.6rem"} open={props.open}>
            <NftBoardContentSubject>{props.text[0]}</NftBoardContentSubject>
            {typeof (props.isImage) !== "number" && props.isImage ? (
                <NftBoardContentForm>
                    <Wrapper height={"1rem"}>
                        <ImageForm src={props.isImage.image} height={"150%"} />
                    </Wrapper>
                    <NftBoardContent>{props.isImage.name}</NftBoardContent>
                </NftBoardContentForm>
            ) : (
                <NftBoardContentForm>
                    <NftBoardContent>
                        {typeof props.text[1] === "string" && props.text[1].length === 42
                            ? props.text[1].substring(0, 6) + "..." + props.text[1].substring(38, 42)
                            : props.text[1]}
                    </NftBoardContent>
                </NftBoardContentForm>
            )}
        </NftBoardContentRowWrap>
    )
}

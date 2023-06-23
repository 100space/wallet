import { useGetMode } from "@hooks/useMode"
import { ImageForm, Wrapper } from "@styled/index"
import { NftBoardContentRowWrap, NftBoardContentSubject, NftBoardContentForm, NftBoardContent } from "./styled/Board.styled"

export const NftBoardContentRow = (props: { text: (string | string[])[], isImage: boolean }) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <NftBoardContentRowWrap mode={modeState.mode} height={"3.6rem"}>
            <NftBoardContentSubject>
                {props.text[0]}
            </NftBoardContentSubject>
            {props.isImage ?
                <NftBoardContentForm>
                    <Wrapper height={"1rem"}>
                        <ImageForm src={props.text[1][0]} height={"150%"} />
                    </Wrapper>
                    <NftBoardContent>
                        {props.text[1][1]}
                    </NftBoardContent>
                </NftBoardContentForm>
                :
                <NftBoardContentForm>
                    <NftBoardContent>
                        {typeof props.text[1] === "string" && props.text[1].length === 40 ? props.text[1].substring(0, 6) + '...' + props.text[1].substring(36, 40) : props.text[1]}
                    </NftBoardContent>
                </NftBoardContentForm>
            }


        </NftBoardContentRowWrap>
    )
}
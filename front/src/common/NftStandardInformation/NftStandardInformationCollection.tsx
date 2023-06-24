import { NftBoardWrap } from "@components/Board/styled/NftBoard.styled"
import { CollectionBtn } from "./styled/NftStandardInformation.styled"
import { useGetMode } from "@hooks/useMode"

export const NftStandardInformationCollection = ({ collectionName }: string) => {
    const [modeState, setModeState ] = useGetMode()
    
    return (
        <NftBoardWrap height={"3.6rem"} mode={modeState.mode} header={false}>
            <CollectionBtn>
                {'컬렉션 이름'}
            </CollectionBtn>
        </NftBoardWrap>
    )
}
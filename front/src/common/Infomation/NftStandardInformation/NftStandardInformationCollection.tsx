import { NftBoardWrap } from "@components/Board/styled/NftBoard.styled"
import { CollectionBtn } from "./styled/NftStandardInformation.styled"
import { useGetMode } from "@hooks/useMode"
import { INFTStandardCollection } from "@utils/interFace/nft.interface"

export const NftStandardInformationCollection = ({ collectionName }: INFTStandardCollection) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <NftBoardWrap height={"3.6rem"} mode={modeState.mode} header={"false"}>
            <CollectionBtn>{collectionName}</CollectionBtn>
        </NftBoardWrap>
    )
}

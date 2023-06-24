import { Board } from "@components/Board"
import { NftBoardWrap } from "@components/Board/styled/NftBoard.styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { Wrapper } from "@styled/index"
import { NftStandardInformationCollection } from "./NftStandardInformationCollection"
import { NftStandardInformationOwner } from "./NftStandardInformationOwner"
import { NftStandardInformationSubject } from "./NftStandardInformationSubject"
import { INFTStandard } from "@utils/interFace/nft.interface"

export const NftStandardInformation = (props: { nftStandardInfo: INFTStandard }) => {
    return (
        <Board>
            <NftStandardInformationCollection collectionName={props.nftStandardInfo.collectionName} />
            <Wrapper>
                <NftStandardInformationSubject nftName={props.nftStandardInfo.nftName} nftId={props.nftStandardInfo.nftId} like={props.nftStandardInfo.like} />
                <NftStandardInformationOwner ownerImage={props.nftStandardInfo.ownerImage} owner={props.nftStandardInfo.owner} />
            </Wrapper>
        </Board>
    )
}
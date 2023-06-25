import { useGetMode } from "@hooks/useMode"
import { CollectionOwnerWrap, CollectionSubject } from "./styled/NftStandardInformation.styled"
import { INFTStandardOwner } from "@utils/interFace/nft.interface"
import { ImageForm } from "@styled/index"


export const NftStandardInformationOwner = ({ ownerImage, owner }: INFTStandardOwner) => {
    const [modeState, setModeState] = useGetMode()
    return (
        <CollectionOwnerWrap mode={modeState.mode}>
            <CollectionSubject>
                <ImageForm src={ownerImage} height={"2rem"}/>
            </CollectionSubject>
            <CollectionSubject>
                by {owner}
            </CollectionSubject>
        </CollectionOwnerWrap>
    )
}
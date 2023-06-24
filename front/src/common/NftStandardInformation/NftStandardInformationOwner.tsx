import { useGetMode } from "@hooks/useMode"
import { CollectionOwnerWrap, CollectionSubject } from "./styled/NftStandardInformation.styled"
import { INFTStandardOwner } from "@utils/interFace/nft.interface"

export const NftStandardInformationOwner = ({ ownerImage, owner }: INFTStandardOwner) => {
    const [modeState, setModeState] = useGetMode()
    return (
        <CollectionOwnerWrap mode={modeState.mode}>
            <CollectionSubject>
                <img src={ownerImage}/>
            </CollectionSubject>
            <CollectionSubject>
                by {owner}
            </CollectionSubject>
        </CollectionOwnerWrap>
    )
}
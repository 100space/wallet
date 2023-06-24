import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { CollectionSubjectWrap, CollectionSubject } from "./styled/NftStandardInformation.styled"
import { INFTStandardSubject } from "@utils/interFace/nft.interface"

export const NftStandardInformationSubject = ({ nftName, nftId, like }: INFTStandardSubject ) => {
    const [modeState, setModeState ] = useGetMode()
    return (
        <CollectionSubjectWrap mode={modeState.mode}>
            <CollectionSubject>
                {nftName}  {`#${nftId}`}
            </CollectionSubject>
            <CollectionSubject>
                {true ? <Icon icon={"mdi:heart"} color="#ff0000"></Icon> : <Icon icon={"ph:heart"} color="#ff0000"></Icon>}
                {like}
            </CollectionSubject>
        </CollectionSubjectWrap>
    )
}
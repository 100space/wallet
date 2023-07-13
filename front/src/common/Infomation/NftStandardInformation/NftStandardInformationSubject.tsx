import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { CollectionSubjectWrap, CollectionSubject } from "./styled/NftStandardInformation.styled"
import { INFTStandardSubject } from "@utils/interFace/nft.interface"
import { Alert } from "@components/Alert/alert"

export const NftStandardInformationSubject = ({ nftName, tokenId, like }: INFTStandardSubject) => {
    const [modeState, setModeState] = useGetMode()

    const makeShort = (tokenId: string) => {
        return tokenId.substring(0, 10) + "..." + tokenId.substring(tokenId.length - 10, tokenId.length)
    }

    return (
        <CollectionSubjectWrap mode={modeState.mode}>
            <CollectionSubject>
                {nftName} {`#${tokenId.length >= 30 ? makeShort(tokenId) : tokenId}`}
            </CollectionSubject>
            <CollectionSubject>
                {true ? (
                    <Icon icon={"mdi:heart"} color="#ff0000"></Icon>
                ) : (
                    <Icon icon={"ph:heart"} color="#ff0000"></Icon>
                )}
                {like}
            </CollectionSubject>
        </CollectionSubjectWrap>
    )
}

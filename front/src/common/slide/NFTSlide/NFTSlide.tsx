import { NftCard } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"
import { INFTCard } from "@utils/interFace/nft.interface"
import { NFTSlideWrap } from "./styled/NFTSlide.styled"

export const NFTSlide = (props: { nftCards: INFTCard[] }) => {
    const [modeState, setModeState] = useGetMode()

    const nftCardList = (nftCards: INFTCard[]) => {
        return nftCards.map(v => <NftCard nftInfo={v} />)
    }

    return (
        <NFTSlideWrap mode={modeState.mode}>
            {nftCardList(props.nftCards)}
        </NFTSlideWrap>
    )
}
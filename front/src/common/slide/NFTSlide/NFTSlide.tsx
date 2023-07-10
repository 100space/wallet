import { NftCard } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NFTSlideWrap } from "./styled/NFTSlide.styled"
import { SetterOrUpdater } from "recoil"

export const NFTSlide = (props: { nftCards: INFTCardByMarket[], setNftCa: SetterOrUpdater<string> }) => {
    const [modeState, setModeState] = useGetMode()

    const nftCardList = (nftCards: INFTCardByMarket[]) => {
        return nftCards.map((v, index) => <NftCard key={index} nftInfo={v} className="card" />)
    }

    return <NFTSlideWrap mode={modeState.mode}>{nftCardList(props.nftCards)}</NFTSlideWrap>
}

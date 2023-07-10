import { NftCard } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NFTSlideWrap } from "./styled/NFTSlide.styled"
import { SetterOrUpdater } from "recoil"
import { MouseEvent } from "react"

export const NFTSlide = (props: { nftCards: INFTCardByMarket[], setNftCa: SetterOrUpdater<string> }) => {
    const [modeState, setModeState] = useGetMode()

    const clickNftCard = (e: MouseEvent, ca: string, tokenId: number) => {
        console.log(ca)
        console.log(tokenId)
    }

    const nftCardList = (nftCards: INFTCardByMarket[]) => {
        return nftCards.map((v, index) => <NftCard key={index} nftInfo={v} className="card" onClick={clickNftCard} />)
    }

    return <NFTSlideWrap mode={modeState.mode}>{nftCardList(props.nftCards)}</NFTSlideWrap>
}

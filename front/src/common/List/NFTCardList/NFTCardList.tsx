import { NftCard } from "@components/Nft"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NFTCardListWrap } from "./styled/NFTCardList.styled"
import { SetterOrUpdater } from "recoil"

export const NFTCardList = (props: { nftCards: INFTCardByMarket[], setNftCa?: SetterOrUpdater<string> }) => {
    const nftCards = (nftCards: INFTCardByMarket[]) => {
        return nftCards.map((v, index) => <NftCard key={index} nftInfo={v} className="card" />)
    }

    return <NFTCardListWrap>{nftCards(props.nftCards)}</NFTCardListWrap>
}

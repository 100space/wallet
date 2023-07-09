import { NftCard } from "@components/Nft"
import { INFTCard } from "@utils/interFace/nft.interface"
import { NFTCardListWrap } from "./styled/NFTCardList.styled"
import { SetterOrUpdater } from "recoil"

export const NFTCardList = (props: { nftCards: INFTCard[], setNftCa: SetterOrUpdater<string> }) => {
    const nftCards = (nftCards: INFTCard[]) => {
        return nftCards.map((v, index) => <NftCard key={index} nftInfo={v} className="card" />)
    }

    return <NFTCardListWrap>{nftCards(props.nftCards)}</NFTCardListWrap>
}

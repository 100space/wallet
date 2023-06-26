import { NftCard } from "@components/Nft"
import { INFTCard } from "@utils/interFace/nft.interface"
import { NFTCardListWrap } from "./styled/NFTCardList.styled"

export const NFTCardList = ( props: { nftCards: INFTCard[] }) => {

    const nftCards = (nftCards: INFTCard[]) => {
        return  nftCards.map((v, index) => <NftCard key={index} nftInfo={v} />)
    }

    return(
        <NFTCardListWrap>
            {nftCards(props.nftCards)}
        </NFTCardListWrap>
    )
}
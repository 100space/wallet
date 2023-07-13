import { NftCard } from "@components/Nft"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NFTCardListWrap } from "./styled/NFTCardList.styled"
import { SetterOrUpdater, useRecoilState } from "recoil"
import { MouseEvent } from "react"
import { NFTByCollection, NFTMarketId } from "@utils/localStorage"
import { useNavigate } from "react-router"

export const NFTCardList = (props: { nftCards: INFTCardByMarket[]; setNftCa?: SetterOrUpdater<string> }) => {
    const [nftInfo, setNftInfo] = useRecoilState(NFTByCollection)
    const [marketId, setMarketId] = useRecoilState(NFTMarketId)
    const navigate = useNavigate()

    const clickNftCard = (e: MouseEvent, ca: string, tokenId: string, marketId?: number) => {
        e.preventDefault()
        if (marketId) setMarketId({ marketId })
        setNftInfo({ ca, tokenId })
        navigate(`/info/nft/${ca}/${tokenId}/ERC721`)
    }

    const nftCards = (nftCards: INFTCardByMarket[]) => {
        return nftCards.map((v, index) => (
            <NftCard key={index} nftInfo={v} className="card" onClick={clickNftCard} marketId={v.marketId} />
        ))
    }

    return <NFTCardListWrap>{nftCards(props.nftCards)}</NFTCardListWrap>
}

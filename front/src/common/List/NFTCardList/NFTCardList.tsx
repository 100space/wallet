import { NftCard } from "@components/Nft"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NFTCardListWrap } from "./styled/NFTCardList.styled"
import { SetterOrUpdater, useRecoilState } from "recoil"
import { MouseEvent } from "react"
import { NFTByCollection } from "@utils/localStorage"
import { useNavigate } from "react-router"

export const NFTCardList = (props: { nftCards: INFTCardByMarket[]; setNftCa?: SetterOrUpdater<string> }) => {
    const [nftInfo, setNftInfo] = useRecoilState(NFTByCollection)
    const navigate = useNavigate()

    const clickNftCard = (e: MouseEvent, ca: string, tokenId: number) => {
        e.preventDefault()
        setNftInfo({ ca, tokenId })
        navigate(`/info/nft/${ca}/${tokenId}`)
    }

    const nftCards = (nftCards: INFTCardByMarket[]) => {
        return nftCards.map((v, index) => <NftCard key={index} nftInfo={v} className="card" onClick={clickNftCard} />)
    }

    return <NFTCardListWrap>{nftCards(props.nftCards)}</NFTCardListWrap>
}

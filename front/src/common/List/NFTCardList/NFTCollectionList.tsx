
import { INFTRow } from "@utils/interFace/nft.interface"
import { NFTCardListWrap } from "./styled/NFTCardList.styled"
import { SetterOrUpdater, useRecoilState } from "recoil"
import { MouseEvent } from "react"
import { NFTByCollection, SelectedCollection } from "@utils/localStorage"
import { useNavigate } from "react-router"
import { NftCardByCollection } from "@components/Nft/NftCard"

export const NFTCollectionList = (props: { nftCards: INFTRow[] }) => {
    const navigate = useNavigate()
    const [nftCa, setNftCa] = useRecoilState(SelectedCollection)

    const clickNftCard = (e: MouseEvent, ca: string | undefined, name: string | undefined) => {
        if (ca === undefined) return
        if (name === undefined) return
        setNftCa({ ca, name })
        navigate(`collection/${ca}`)
    }

    const nftCards = (nftCards: INFTRow[]) => {
        return nftCards.map((v, index) => <NftCardByCollection key={index} nftInfo={v} className="card" onClick={clickNftCard} />)
    }

    return (
        <NFTCardListWrap>
            {nftCards(props.nftCards)}
        </NFTCardListWrap>
    )
}

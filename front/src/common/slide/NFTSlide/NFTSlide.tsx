import { NftCard } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"
import { INFTCard } from "@utils/interFace/nft.interface"
import { NFTSlideWrap } from "./styled/NFTSlide.styled"
import { SetterOrUpdater } from "recoil"
import { MouseEvent } from "react"
import { useNavigate } from "react-router"
import { NftCardByMarket } from "@components/Nft/NftCard"

export const NFTSlide = (props: {
    nftCards: INFTCard[]
    setNftCa: SetterOrUpdater<{
        ca: string
        name: string
    }>
}) => {
    const [modeState, setModeState] = useGetMode()
    const navigate = useNavigate()

    const clickNftCardByCollection = (e: MouseEvent, ca: string | undefined, name: string | undefined) => {
        if (ca === undefined) return
        if (name === undefined) return
        props.setNftCa({ ca, name })
        navigate(`/market/collection/${ca}`)
    }

    const nftCardList = (nftCards: INFTCard[]) => {
        return nftCards.map((v, index) => (
            <NftCardByMarket key={index} nftInfo={v} className="card" onClick={clickNftCardByCollection} />
        ))
    }

    return <NFTSlideWrap mode={modeState.mode}>{nftCardList(props.nftCards)}</NFTSlideWrap>
}

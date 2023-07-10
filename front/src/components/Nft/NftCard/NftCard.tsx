import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NftCardImg } from "./NftCardImg"
import { NftContents } from "./NftContents"
import { NftCardWrap } from "./styled"
import { MouseEvent, memo } from "react"
import { useLocation } from "react-router"

export const NftCard = memo((props: { nftInfo: INFTCardByMarket; className: string, onClick: (e: MouseEvent, ca: string, tokenId: number) => void }) => {
    const { pathname } = useLocation()

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF"
        let color = "#"
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    return pathname.indexOf("/market/new") >= 0 || pathname.indexOf("/market") <= 0 ? (
        <NftCardWrap color={getRandomColor()} width={"100%"} height={"26rem"} onClick={(e) => {
            if (!props.nftInfo.nftAddress || !props.nftInfo.tokenId) return
            return props.onClick(e, props.nftInfo.nftAddress, props.nftInfo.tokenId)
        }}>
            <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
            <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
        </NftCardWrap>
    ) : (
        <NftCardWrap color={getRandomColor()} width={"50rem"} height={"25rem"} onClick={(e) => {
            if (!props.nftInfo.nftAddress || !props.nftInfo.tokenId) return
            return props.onClick(e, props.nftInfo.nftAddress, props.nftInfo.tokenId)
        }}>
            <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
            <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
        </NftCardWrap>
    )
})

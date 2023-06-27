import { INFTCard } from "@utils/interFace/nft.interface"
import { NftCardImg } from "./NftCardImg"
import { NftContents } from "./NftContents"
import { NftCardWrap } from "./styled"
import { memo } from "react"
import { useLocation } from "react-router"

export const NftCard = memo((props: { nftInfo: INFTCard; className: string }) => {
    const { pathname } = useLocation()
    // 데이터 Fetch 할때 color를 넣어주면 고정됌
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF"
        let color = "#"
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        // color = "#555"
        return color
    }

    return pathname.indexOf("/market/new") >= 0 || pathname.indexOf("/market") <= 0 ? (
        <NftCardWrap color={getRandomColor()} width={"100%"} height={"24.5rem"}>
            <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
            <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
        </NftCardWrap>
    ) : (
        <NftCardWrap color={getRandomColor()} width={"50rem"} height={"25rem"}>
            <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
            <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
        </NftCardWrap>
    )
})

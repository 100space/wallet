import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NftCardImg } from "./NftCardImg"
import { NftContents } from "./NftContents"
import { NftCardWrap } from "./styled"
import { MouseEvent, memo, useState } from "react"
import { useLocation } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"
import { ModeState, NFTMarketId } from "@utils/localStorage"

export const NftCard = memo(
    (props: {
        nftInfo: INFTCardByMarket
        className: string
        marketId?: number
        onClick: (e: MouseEvent, ca: string, tokenId: string, marketId?: number, tokenStandard?: string) => void
    }) => {
        const { pathname } = useLocation()
        const { mode } = useRecoilValue(ModeState)
        const getRandomColor = () => {
            const darkLetters = "0123456789a"
            const lightLetters = "56789ABCDEF"
            let letters = mode === "darkMode" ? darkLetters : lightLetters
            let color = "#"

            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 10)]
            }
            return color
        }
        const [color, setColor] = useState(getRandomColor())
        return pathname.indexOf("/market/new") >= 0 || pathname.indexOf("/market") <= 0 ? (
            <NftCardWrap
                color={color}
                width={"100%"}
                height={"26rem"}
                onClick={(e) => {
                    if (!props.nftInfo.nftAddress || !props.nftInfo.tokenId) return
                    return props.onClick(
                        e,
                        props.nftInfo.nftAddress,
                        props.nftInfo.tokenId,
                        props.marketId,
                        props.nftInfo.tokenStandard
                    )
                }}
            >
                <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
                <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
            </NftCardWrap>
        ) : (
            <NftCardWrap
                color={color}
                width={"50rem"}
                height={"25rem"}
                onClick={(e) => {
                    if (!props.nftInfo.nftAddress || !props.nftInfo.tokenId) return
                    return props.onClick(e, props.nftInfo.nftAddress, props.nftInfo.tokenId, props.marketId, "ERC721")
                }}
            >
                <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
                <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
            </NftCardWrap>
        )
    }
)

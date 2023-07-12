import { INFTCard } from "@utils/interFace/nft.interface"
import { NftCardImg } from "./NftCardImg"
import { NftContents } from "./NftContents"
import { NftCardWrap } from "./styled"
import { MouseEvent, memo } from "react"
import { useLocation } from "react-router"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { LoadingHeader } from "@common/header/LoadingHeader"
import { LoadingBar } from "@components/loading"

export const NftCardByMarket = memo(
    (props: {
        nftInfo: INFTCard
        className: string
        onClick: (e: MouseEvent, ca: string | undefined, name: string | undefined) => void
    }) => {
        const { mode } = useRecoilValue(ModeState)
        const getRandomColor = () => {
            const darkLetters = "0123456789a"
            const lightLetters = "56789ABCDEF"
            let letters = mode === "darkMode" ? darkLetters : lightLetters
            let color = "#"

            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 10)]
            }
            return color
        }

        return (
            <NftCardWrap
                color={getRandomColor()}
                width={"100%"}
                height={"26rem"}
                onClick={(e: MouseEvent) => props.onClick(e, props.nftInfo.ca, props.nftInfo.name)}
            >
                <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
                <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
            </NftCardWrap>
        )
    }
)

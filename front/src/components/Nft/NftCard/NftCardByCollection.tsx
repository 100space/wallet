import { INFTRow, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { NftCardImg } from "./NftCardImg"
import { NftContents } from "./NftContents"
import { NftCardWrap } from "./styled"
import { MouseEvent, memo, useState } from "react"
import { useLocation } from "react-router"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { BackBtnHeader } from "@common/header/BackBtnHeader"

export const NftCardByCollection = memo(
    (props: {
        nftInfo: INFTRow
        className: string
        onClick: (e: MouseEvent, ca: string | undefined, name: string | undefined) => void
    }) => {
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
        return (
            <>
                <NftCardWrap
                    color={color}
                    width={"100%"}
                    height={"26rem"}
                    onClick={(e) => props.onClick(e, props.nftInfo.ca, props.nftInfo.name)}
                >
                    <NftCardImg width={"90%"} height={"60%"} image={props.nftInfo.image} className={props.className} />
                    <NftContents
                        name={props.nftInfo.name}
                        owner={props.nftInfo.ca}
                        prices={props.nftInfo.prices}
                        collection={true}
                    />
                </NftCardWrap>
            </>
        )
    }
)

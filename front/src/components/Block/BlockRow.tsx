import { BlockRowWrap, BlockImgWrap, BlockImg, BlockInfoWrap, BlockNumber, BlockHash, BlockInformation } from "./styled"
import { IBlockRow } from "@utils/interFace/block.interface"
import { Icon } from "@iconify/react"
import { useGetMode } from "@hooks/useMode"
import { MouseEvent } from "react"

export const BlockRow = ({ blockNumber, blockHash, hash }: IBlockRow) => {
    const [modeState, setModeState] = useGetMode()

    const handleClick = (e: MouseEvent) => {
        window.open(`https://mumbai.polygonscan.com/tx/${hash}`)
    }

    return (
        <BlockRowWrap height={"5.8rem"} mode={modeState.mode}>
            <BlockImgWrap width={"10%"} mode={modeState.mode}>
                <BlockImg src={"https://cdn-icons-png.flaticon.com/128/4123/4123839.png"} mode={modeState.mode} />
            </BlockImgWrap>
            <BlockInfoWrap width={"80%"} mode={modeState.mode}>
                <BlockHash mode={modeState.mode}>
                    BlockHash - {blockHash.substring(0, 6) + "..." + blockHash.substring(60, 66)}
                </BlockHash>
                <BlockNumber mode={modeState.mode}>TxHash - {hash.substring(0, 6) + "..." + hash.substring(60, 66)}</BlockNumber>
            </BlockInfoWrap>
            <Icon icon={"ep:arrow-up-bold"} rotate={1} onClick={handleClick} />
            <BlockInformation mode={modeState.mode}>
                자세히 보기
            </BlockInformation>
        </BlockRowWrap>
    )
}

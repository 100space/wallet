import { BlockRowWrap, BlockImgWrap, BlockImg, BlockInfoWrap, BlockNumber, BlockHash } from "./styled"
import { IBlockRow } from "@utils/interFace/block.interface"
import { Icon } from "@iconify/react"
import { useGetMode } from "@hooks/useMode"

export const BlockRow = ({ blockNumber, blockHash }: IBlockRow) => {
    const [modeState, setModeState] = useGetMode()
    return(
        <BlockRowWrap height={"5.8rem"} mode={modeState.mode}>
            <BlockImgWrap width={"10%"} mode={modeState.mode}>
                <BlockImg src={"https://cdn-icons-png.flaticon.com/128/4123/4123839.png"} mode={modeState.mode}/>
            </BlockImgWrap>
            <BlockInfoWrap width={"80%"} mode={modeState.mode}>
                <BlockNumber mode={modeState.mode}>
                    {"# " + blockNumber}
                </BlockNumber>
                <BlockHash mode={modeState.mode}>
                    {blockHash.substring(0,6) + "..." + blockHash.substring(58, 64)}
                </BlockHash>
            </BlockInfoWrap>
            <Icon icon={"ep:arrow-up-bold"} rotate={1} />
        </BlockRowWrap>
    )
}
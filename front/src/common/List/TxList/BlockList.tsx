import { BlockListHeader } from "@common/header/BlockListHeader"
import { BlockListWrap } from "./styled"
import { BlockRow } from "@components/Block"
import { IBlockRow } from "@utils/interFace/block.interface"

export const BlockList = (props: { blocks: IBlockRow[] }) => {
    const BlockListRows = (blocks: IBlockRow[]) => {
        return blocks.map((v, index) => <BlockRow key={index} blockNumber={v.blockNumber} blockHash={v.blockHash} />)
    }

    return <BlockListWrap>{BlockListRows(props.blocks)}</BlockListWrap>
}

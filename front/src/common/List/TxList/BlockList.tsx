import { BlockListHeader } from "@common/header/BlockListHeader"
import { BlockListWrap } from "./styled"
import { BlockRow } from "@components/Block"
import { IBlockRow } from "@utils/interFace/block.interface"
import { useNFTin } from "@hooks/useNFTin"
import { useRecoilValue } from "recoil"
import { MyAccounts } from "@utils/localStorage"

export const BlockList = (props: { blocks: IBlockRow[] }) => {
    const { address } = useRecoilValue(MyAccounts)
    console.log(address)
    const nftin = useNFTin()
    const history = async () => {
        const internalTxFilter = {
            fromBlock: "earliest", // 검색 시작 블록 번호
            toBlock: "latest", // 검색 종료 블록 번호
            address: address, // 스마트 계약 주소
        }
        if (nftin) {
            await nftin.provider.getLogs(internalTxFilter).then((res) => {
                console.log(res)
            })
        }
    }
    history()
    const BlockListRows = (blocks: IBlockRow[]) => {
        return blocks.map((v, index) => <BlockRow key={index} blockNumber={v.blockNumber} blockHash={v.blockHash} />)
    }

    return <BlockListWrap>{BlockListRows(props.blocks)}</BlockListWrap>
}

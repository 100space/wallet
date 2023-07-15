import { BlockListHeader } from "@common/header/BlockListHeader"
import { BlockListWrap } from "./styled"
import { BlockRow } from "@components/Block"
import { IBlockRow, ITx } from "@utils/interFace/block.interface"
import { useNFTin } from "@hooks/useNFTin"
import { useRecoilValue } from "recoil"
import { MyAccounts } from "@utils/localStorage"

export const BlockList = (props: { blocks: ITx[] }) => {
    const { address } = useRecoilValue(MyAccounts)
    const nftin = useNFTin()
    const history = async () => {
        const internalTxFilter = {
            fromBlock: "earliest", // 검색 시작 블록 번호
            toBlock: "latest", // 검색 종료 블록 번호
            address: address, // 스마트 계약 주소
        }
        if (nftin) {
            await nftin.provider.getLogs(internalTxFilter)
        }
    }
    history()
    const BlockListRows = (blocks: IBlockRow[]) => {
        return blocks.map((v, index) => (
            <BlockRow key={index} blockNumber={v.blockNumber} blockHash={v.blockHash} hash={v.hash} />
        ))
    }

    return (
        <BlockListWrap>
            {props.blocks.length === 0 ? (
                <div style={{ fontSize: "2rem", color: "#ff4f4f", fontWeight: 500, textAlign: "center" }}>
                    거래 정보가 존재하지 않습니다.
                </div>
            ) : (
                BlockListRows(props.blocks)
            )}
        </BlockListWrap>
    )
}

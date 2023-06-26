import { Board, NftBoardHeader } from "@components/Board"
import { NftBoardButton } from "@components/Board/styled/NftBoard.styled"
import { TransactionRow } from "@components/Transaction"
import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { NftTxListButton } from "./styled/NftTxList.styled"

export const NftTxList = (props: { txList: ITransaction[] }) => {
    const [modeState, setModeState] = useGetMode()

    const txList = (transactionList: ITransaction[]) => {
        return transactionList.map(v => {
            return <TransactionRow txInfo={v} />
        })
    }

    return (
        <>
            <Board>
                <NftBoardHeader text={["거래내역", "접기"]} />
                {txList(props.txList)}
                <NftTxListButton>
                    <NftBoardButton mode={modeState.mode}>
                        거래내역 더보기
                    </NftBoardButton>
                </NftTxListButton>
            </Board>
        </>
    )
}
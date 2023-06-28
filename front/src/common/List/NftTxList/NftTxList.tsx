import { Board, NftBoardHeader } from "@components/Board"
import { NftBoardButton } from "@components/Board/styled/NftBoard.styled"
import { TransactionRow } from "@components/Transaction"
import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { NftTxListButton } from "./styled/NftTxList.styled"
import { useState } from "react"
import { useOpenHandler } from "@hooks/useOpen"

export const NftTxList = (props: { txList: ITransaction[] }) => {
    const [modeState, setModeState] = useGetMode()
    const [isOpen, handleClose] = useOpenHandler()

    const txList = (transactionList: ITransaction[]) => {
        return transactionList.map((v, i) => {
            return <TransactionRow txInfo={v} open={isOpen} key={i} />
        })
    }

    return (
        <>
            <Board>
                <NftBoardHeader text={["거래내역", "접기"]} onClick={handleClose} />
                {txList(props.txList)}
                {/* <NftTxListButton>
                    <NftBoardButton mode={modeState.mode}>거래내역 더보기</NftBoardButton>
                </NftTxListButton> */}
            </Board>
        </>
    )
}

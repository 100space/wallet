import { Board, NftBoardHeader } from "@components/Board"
import { NftBoardButton } from "@components/Board/styled/NftBoard.styled"
import { TransactionRow } from "@components/Transaction"
import { useGetMode } from "@hooks/useMode"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { styled } from "styled-components"

export const NftTxListButton = styled.div<ISizeProps>`
    padding: 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        font-size: 1rem;
        font-weight: 700;
    }
`

export const NftMarketList = (props: { txList: ITransaction[] }) => {
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
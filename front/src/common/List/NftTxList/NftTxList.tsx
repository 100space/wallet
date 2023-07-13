import { Board, NftBoardHeader } from "@components/Board"
import { TransactionRow } from "@components/Transaction"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { useOpenHandler } from "@hooks/useOpen"

export const NftTxList = (props: { txList: ITransaction[] }) => {
    const [isOpen, handleClose] = useOpenHandler()

    const txList = (transactionList: ITransaction[]) => {
        return transactionList.map((v, i) => {
            return <TransactionRow
                key={i}
                id={v.id}
                from={v.from}
                to={v.to}
                ca={v.ca}
                tokenId={v.tokenId}
                createdAt={v.createdAt}
                updatedAt={v.updatedAt}
                price={v.price}
                event={v.event}
                open={isOpen}
            />
        })
    }

    return (
        <>
            <Board>
                <NftBoardHeader text={["거래내역", "자세히 보기", "접기"]} onClick={handleClose} />
                {txList(props.txList)}
            </Board>
        </>
    )
}

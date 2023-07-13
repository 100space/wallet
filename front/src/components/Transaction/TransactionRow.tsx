import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { TransactionImage } from "./TransactionImage"
import { TransactionRowContents } from "./TranscationContents"
import { RowContentsWraps } from "./styled"

interface ITransactionRow extends ITransaction {
    open?: string
}

export const TransactionRow = ({ id, from, to, ca, tokenId, createdAt, updatedAt, price, open, event }: ITransactionRow) => {
    return (
        <RowContentsWraps height={"5.6rem"} open={open}>
            <TransactionImage event={event} />
            <TransactionRowContents
                id={id}
                from={from}
                to={to}
                ca={ca}
                tokenId={tokenId}
                createdAt={createdAt}
                updatedAt={updatedAt}
                price={price}
                event={event}
            />
        </RowContentsWraps>
    )
}

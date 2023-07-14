import { ITransactionState } from "@utils/interFace/transaction.interface"
import { Icon } from "@iconify/react"
import { TransactionImgWrap, TransactionStatus } from "../styled"

export const TransactionImage = ({ event }: ITransactionState) => {

    return (
        <TransactionImgWrap width={"4.8rem"} color={event === "minted" ? "#0042d1" : "#e84562"}>
            {
                event === "minted"
                    ?
                    <Icon icon={"mdi:plus-circle-outline"} />
                    :
                    <Icon icon={"iconoir:arrow-tr-circle"} />
            }
            <TransactionStatus>
                {event}
            </TransactionStatus>
        </TransactionImgWrap>
    )
}
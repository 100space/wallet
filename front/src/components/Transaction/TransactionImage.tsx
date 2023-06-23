import { ITransactionState } from "@utils/interFace/transaction.interface"
import { TransactionImgWrap, TransactionStatus } from "./styled/Transaction.styled"
import { Icon } from "@iconify/react"

export const TransactionImage = ({ state }: ITransactionState) => {

    return (
        <TransactionImgWrap width={"4.8rem"} color={state === "receiver" ? "#00d17f" : "#e84562"}>
            {
                state === "receiver"
                    ?
                    <Icon icon={"iconoir:arrow-bl-circle"} />
                    :
                    <Icon icon={"iconoir:arrow-tr-circle"} />
            }
            <TransactionStatus>
                {state}
            </TransactionStatus>
        </TransactionImgWrap>
    )
}
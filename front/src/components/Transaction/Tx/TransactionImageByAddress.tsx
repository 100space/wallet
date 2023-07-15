import { ITransactionState } from "@utils/interFace/transaction.interface"
import { Icon } from "@iconify/react"
import { TransactionImgWrap, TransactionStatus } from "../styled"
import { useRecoilValue } from "recoil"
import { MyAccounts } from "@utils/localStorage"

interface ITxImgByUser {
    from: string
    to: string
    isError: string
}

export const TransactionImageByAddress = ({ from, to, isError }: ITxImgByUser) => {
    const { address } = useRecoilValue(MyAccounts)

    return (
        <TransactionImgWrap width={"4.8rem"} height={"100%"} color={isError === "1" ? "#ff0b23" : Number(from) === Number(address) ? "#79a2f8" : "#ff0b23"}>
            {
                isError === "1" ?
                    <Icon icon={"iconoir:delete-circle"} />
                    :
                    Number(from) === Number(address)
                        ? <Icon icon={"iconoir:arrow-tr-circle"} />
                        : <Icon icon={"iconoir:arrow-tr-circle"} rotate={2} />
            }
            <TransactionStatus>
                {isError === "1" ? "failed" : Number(from) === Number(address) ? "sender" : "receiver"}
            </TransactionStatus>
        </TransactionImgWrap>
    )
}
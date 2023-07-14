import { ITransactionState } from "@utils/interFace/transaction.interface"
import { Icon } from "@iconify/react"
import { TransactionImgWrap, TransactionStatus } from "../styled"
import { useRecoilValue } from "recoil"
import { MyAccounts } from "@utils/localStorage"

interface ITxImgByUser {
    from: string
    to: string
}

export const TransactionImageByAddress = ({ from, to }: ITxImgByUser) => {
    const { address } = useRecoilValue(MyAccounts)

    return (
        <TransactionImgWrap width={"4.8rem"} height={"100%"} color={Number(from) === Number(address) ? "#257cd2" : "#b42533"}>
            {
                Number(from) === Number(address) ? <Icon icon={"iconoir:arrow-tr-circle"} /> : <Icon icon={"iconoir:arrow-tr-circle"} rotate={2} />
            }
            <TransactionStatus>
                {Number(from) === Number(address) ? "sender" : "receiver"}
            </TransactionStatus>
        </TransactionImgWrap>
    )
}
import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { RowContentsWraps } from "../styled"
import { ITxByUser } from "@utils/interFace/block.interface"
import { TransactionImageByAddress } from "./TransactionImageByAddress"
import { TransactionRowContentsByAddress } from "./TranscationContentsByAddress"


export const TransactionRowByAddress = ({ from, to, timeStamp, value }: ITxByUser) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <RowContentsWraps open={"on"} mode={modeState.mode}>
            <TransactionImageByAddress from={from} to={to} />
            <TransactionRowContentsByAddress from={from} to={to} timeStamp={timeStamp} value={value} />
        </RowContentsWraps>
    )
}

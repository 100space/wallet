import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { TransactionImage } from "./TransactionImage"
import { TransactionRowContents } from "./TranscationContents"
import { RowContentsWraps } from "./styled"

export const TransactionRow = (props: { txInfo: ITransaction}) => {
    return(
        <RowContentsWraps height={"5.6rem"}>
            <TransactionImage state={props.txInfo.state} />
            <TransactionRowContents txInfo={props.txInfo}/>
        </RowContentsWraps>
    )
}
import { RowContent, RowContentWrap } from "@components/Nft/NftRow/styled/NftRow.styled"
import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"

export const TransactionRowContents = (props: { txInfo: ITransaction }) => {
    const [modeState, setChange] = useGetMode()
    
    return (
        <div style={{ width: "85%" }}>
            <RowContentWrap height={'50%'} mode={modeState.mode}>
                <RowContent>
                    {(props.txInfo.state === "receiver") ? "발신자" : "수신자"}:{props.txInfo.opponent.substring(0, 6) + '...' + props.txInfo.opponent.substring(36, 40)}
                </RowContent>
                <RowContent>
                    {props.txInfo.amounts[1].amount >= 0 ? "+" : "-"} {props.txInfo.amounts[1].amount} {props.txInfo.amounts[1].currency}
                </RowContent>
            </RowContentWrap>

            <RowContentWrap height={'50%'} mode={modeState.mode}>
                <RowContent>
                    거래일시: {props.txInfo.timestamp}
                </RowContent>
                <RowContent>
                    {props.txInfo.amounts[0].amount >= 0 ? "+" : "-"} {props.txInfo.amounts[0].currency} {props.txInfo.amounts[0].amount}
                </RowContent>
            </RowContentWrap>
        </div>
    )
}
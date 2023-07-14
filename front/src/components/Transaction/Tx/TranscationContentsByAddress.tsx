import { RowContent, RowContentWrap } from "@components/Nft/NftRow/styled/NftRow.styled"
import { useGetMode } from "@hooks/useMode"
import { ITxByUser } from "@utils/interFace/block.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { MyAccounts, MyInfo, MyNetwork } from "@utils/localStorage"
import { ExchangePrice } from "@utils/localStorage/Alarm"
import { useRecoilValue } from "recoil"

export const TransactionRowContentsByAddress = ({ from, to, timeStamp, value }: ITxByUser) => {
    const [modeState, setChange] = useGetMode()
    const { address } = useRecoilValue(MyAccounts)
    const network = useRecoilValue(MyNetwork)
    const current = useRecoilValue(MyInfo)
    const exchange = useRecoilValue(ExchangePrice)

    return (
        <div style={{ width: "100%" }}>
            <RowContentWrap height={"50%"} mode={modeState.mode}>
                <RowContent>
                    {Number(from) === Number(address) ? "보내기" : "받기"} {to.substring(0, 6) + "..." + to.substring(36, 42)}
                </RowContent>
                <RowContent>
                    {Number(value) / (10 ** 18)} {current[network].networks.symbol}
                </RowContent>
            </RowContentWrap>

            <RowContentWrap height={"50%"} mode={modeState.mode}>
                <RowContent>
                    {timeStamp}
                </RowContent>
                <RowContent>
                    {Number(value) / (10 ** 18) * exchange} {"KRW"}
                </RowContent>
            </RowContentWrap>
        </div>
    )
}

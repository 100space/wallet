import { RowContent, RowContentWrap } from "@components/Nft/NftRow/styled/NftRow.styled"
import { useGetMode } from "@hooks/useMode"
import { ITransaction } from "@utils/interFace/transaction.interface"

export const TransactionRowContents = ({ id, from, to, ca, tokenId, createdAt, updatedAt, price, event }: ITransaction) => {
    const [modeState, setChange] = useGetMode()

    return (
        <div style={{ width: "85%" }}>
            <RowContentWrap height={"50%"} mode={modeState.mode}>
                <RowContent>
                    {event === "minted" ? "생성자" : "수신자"} : {" "}
                    {to.substring(0, 6) + "..." + to.substring(36, 40)}
                </RowContent>
                <RowContent>
                    {price[1].price >= 0 ? "+" : "-"} {price[1].price}{" "}
                    {price[1].currency}
                </RowContent>
            </RowContentWrap>

            <RowContentWrap height={"50%"} mode={modeState.mode}>
                {
                    event === "minted"
                        ?
                        <RowContent>생성일자 : {createdAt}</RowContent>
                        :
                        <RowContent>거래일시 : {createdAt}</RowContent>
                }
                <RowContent>
                    {price[0].price >= 0 ? "+" : "-"} {price[0].currency}{" "}
                    {price[0].price}
                </RowContent>
            </RowContentWrap>
        </div>
    )
}

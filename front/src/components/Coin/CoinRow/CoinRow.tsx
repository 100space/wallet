import { useRecoilValue } from "recoil"
import { CoinWrap, CoinRank, CoinNameForm, CoinPrice, CoinRate } from "./styled"
import { ICoin } from "@utils/interFace/coin.interface"
import { ModeState } from "@utils/localStorage"
import { MouseEvent } from "react"

const type = "row"

export const CoinRow = (props: { coinData: ICoin, onClick: (e: MouseEvent, data: string) => void }) => {
    const { mode } = useRecoilValue(ModeState)

    return (
        <CoinWrap mode={mode} onClick={(e: MouseEvent) => props.onClick(e, props.coinData.symbol)}>
            <CoinRank width={type === "row" ? "12.5%" : ""} rank={props.coinData.rank} />
            <CoinNameForm
                type={type}
                image={props.coinData.image}
                name={props.coinData.name}
                symbol={props.coinData.symbol}
            />
            <CoinPrice
                width={type === "row" ? "45%" : ""}
                price={Math.floor(props.coinData.coinPrice[0].price * 1000) / 1000}
                currency={props.coinData.coinPrice[0].currency}
            />
            <CoinRate width={type === "row" ? "15%" : ""} changePercent={props.coinData.changePercent} />
        </CoinWrap>
    )
}

import { CoinWrap, CoinRank, CoinNameForm, CoinPrice, CoinRate } from "./styled"
import { ICoin } from "@utils/interFace/coin.interface"

const type = "row"

export const CoinRow = (props: { coinData: ICoin }) => {
    return(
        <CoinWrap>
            <CoinRank width={type ==="row" ? "12.5%" : ""} rank={props.coinData.rank}/>
            <CoinNameForm type={type} image={props.coinData.image} name={props.coinData.name} symbol={props.coinData.symbol}/>
            <CoinPrice width={type ==="row" ? "45%" : ""} price={props.coinData.coinPrice[0].price} currency={props.coinData.coinPrice[0].currency}/>
            <CoinRate width={type ==="row" ? "15%" : ""} changePercent={props.coinData.changePercent}/>
        </CoinWrap>
    )
}
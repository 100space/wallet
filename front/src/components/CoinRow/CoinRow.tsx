import { ICoin } from "@utils/interFace/styled.interface"
import { CoinWrap, CoinRank, CoinNameForm, CoinPrice, CoinRate } from "./styled"

const type = "row"

export const CoinRow = (props: { coinData: ICoin }) => {
    return(
        <CoinWrap>
            <CoinRank width={type ==="row" ? "12.5%" : ""} rank={props.coinData.rank}/>
            <CoinNameForm type={type} coinImg={props.coinData.coinImg} name={props.coinData.name} symbol={props.coinData.symbol}/>
            <CoinPrice width={type ==="row" ? "45%" : ""} price={props.coinData.price}/>
            <CoinRate width={type ==="row" ? "15%" : ""} rate={props.coinData.rate}/>
        </CoinWrap>
    )
}
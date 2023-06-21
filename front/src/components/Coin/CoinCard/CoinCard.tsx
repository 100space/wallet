import { CoinCardWrap, CoinCardContentWrap, CoinCardContentPriceWrap, CoinCardContentPercentWrap, CoinCardContentPercent, CoinCardHeader } from "./styled"
import { ICoinCard } from "@utils/interFace/coin.interface"
import { PriceCard } from "../PriceCard"

export const CoinCard = (props: {coinData: ICoinCard}) => {
    return(
        <CoinCardWrap width="12rem">
            <CoinCardHeader image={props.coinData.image} symbol={props.coinData.symbol} name={props.coinData.name}/>
            <CoinCardContentWrap height="65%">
                <CoinCardContentPriceWrap width="85%" height="50%">
                    <PriceCard currency={props.coinData.usdCurrency} price={props.coinData.usdPrice} />
                    <PriceCard currency={props.coinData.currency} price={props.coinData.price} />
                </CoinCardContentPriceWrap>
                <CoinCardContentPercentWrap height="50%">
                    <CoinCardContentPercent color={props.coinData.changePercent >= 0 ? '#00d17f' : '#e84562'}>{props.coinData.changePercent >= 0 ? '+' : '-'} {props.coinData.changePercent} %</CoinCardContentPercent>
                </CoinCardContentPercentWrap>
            </CoinCardContentWrap>
        </CoinCardWrap>
    )
}
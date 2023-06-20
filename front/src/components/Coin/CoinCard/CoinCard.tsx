import { PriceCard } from "../PriceCard"
import { CoinCardWrap, CoinCardContentWrap, CoinCardContentPriceWrap, CoinCardContentPercentWrap, CoinCardContentPercent, CoinCardHeader } from "./styled"
import { ICoinCard } from "@utils/interFace/core"

export const CoinCard = ({ props }: ICoinCard) => {
    return(
        <CoinCardWrap width="12rem">
            <CoinCardHeader image={props.image} symbol={props.symbol} name={props.name}/>
            <CoinCardContentWrap height="65%">
                <CoinCardContentPriceWrap width="85%" height="50%">
                    <PriceCard currency={"USD"} price={props.usdPrice} />
                    <PriceCard currency={"KRW"} price={props.krwPrice} />
                </CoinCardContentPriceWrap>
                <CoinCardContentPercentWrap height="50%">
                    <CoinCardContentPercent color={props.changePercent >= 0 ? '#00d17f' : '#e84562'}>{props.changePercent >= 0 ? '+' : '-'} {props.changePercent} %</CoinCardContentPercent>
                </CoinCardContentPercentWrap>
            </CoinCardContentWrap>
        </CoinCardWrap>
    )
}
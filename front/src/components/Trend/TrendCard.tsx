import { TrendCardHeader, TrendCardContentPercent, TrendCardContentPercentWrap, TrendCardContentPriceWrap, TrendCardContentWrap, TrendCardWrap } from "./styled"
import { ITrendCard } from "@utils/interFace/core"
import { PriceCard } from "@components/PriceCard"

export const TrendCard = ({ props }: ITrendCard) => {
    return(
        <TrendCardWrap width="33%">
            <TrendCardHeader image={props.image} symbol={props.symbol} name={props.name}/>
            <TrendCardContentWrap height="65%">
                <TrendCardContentPriceWrap width="85%" height="50%">
                    <PriceCard currency={"USD"} price={props.usdPrice} />
                    <PriceCard currency={"KRW"} price={props.krwPrice} />
                </TrendCardContentPriceWrap>
                <TrendCardContentPercentWrap height="50%">
                    <TrendCardContentPercent color={props.changePercent >= 0 ? '#00d17f' : '#e84562'}>{props.changePercent >= 0 ? '+' : '-'} {props.changePercent} %</TrendCardContentPercent>
                </TrendCardContentPercentWrap>
            </TrendCardContentWrap>
        </TrendCardWrap>
    )
}
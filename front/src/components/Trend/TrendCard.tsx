import { TrendCardContentPercent, TrendCardContentPercentWrap, TrendCardContentPriceWrap, TrendCardContentWrap, TrendCardHeader, TrendCardHeaderContentWrap, TrendCardHeaderImg, TrendCardHeaderImgWrap, TrendCardHeaderName, TrendCardHeaderSymbol, TrendCardHeaderWrap, TrendCardWrap } from "./styled/TrendCard.styled"
import { PriceCard } from "@components/PriceCard"

export interface ITrendCardData {
    name: string
    symbol: string
    image: string
    usdPrice: number
    krwPrice: number
    changePercent: number
}

export interface ITrendCard {
    props: ITrendCardData
}

export const TrendCard = ({ props }: ITrendCard) => {
    return(
        <TrendCardWrap width="33%">
            <TrendCardHeaderWrap height="30%">
                <TrendCardHeader width="90%" height="60%">
                    <TrendCardHeaderImgWrap>
                        <TrendCardHeaderImg src={props.image}/>
                    </TrendCardHeaderImgWrap>
                    <TrendCardHeaderContentWrap>
                        <TrendCardHeaderSymbol>
                            {props.symbol}
                        </TrendCardHeaderSymbol>
                        <TrendCardHeaderName>
                            {props.name}
                        </TrendCardHeaderName>
                    </TrendCardHeaderContentWrap>
                </TrendCardHeader>
            </TrendCardHeaderWrap>
            <TrendCardContentWrap height="70%">
                <TrendCardContentPriceWrap width="90%" height="50%">
                    <PriceCard currency={"usd"} price={props.usdPrice} />
                    <PriceCard currency={"krw"} price={props.krwPrice} />
                </TrendCardContentPriceWrap>
                <TrendCardContentPercentWrap height="50%">
                    <TrendCardContentPercent color={props.changePercent >= 0 ? '#00d17f' : '#e84562'}>{props.changePercent >= 0 ? '+' : '-'} {props.changePercent} %</TrendCardContentPercent>
                </TrendCardContentPercentWrap>
            </TrendCardContentWrap>
        </TrendCardWrap>
    )
}
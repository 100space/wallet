import {
    CoinCardWrap,
    CoinCardContentWrap,
    CoinCardContentPriceWrap,
    CoinCardContentPercentWrap,
    CoinCardContentPercent,
    CoinCardHeader,
} from "./styled"
import { ICoin } from "@utils/interFace/coin.interface"
import { PriceCard } from "../PriceCard"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { MouseEvent } from "react"

export const CoinCard = (props: { coinData: ICoin, onClick: (e: MouseEvent, data: string) => void }) => {
    const { mode } = useRecoilValue(ModeState)
    return (
        <CoinCardWrap width="12rem" mode={mode} onClick={(e) => props.onClick(e, props.coinData.symbol)} data-symbol={props.coinData.symbol}>
            <CoinCardHeader image={props.coinData.image} symbol={props.coinData.symbol} name={props.coinData.name} />
            <CoinCardContentWrap height="65%">
                <CoinCardContentPriceWrap width="85%" height="50%">
                    <PriceCard
                        currency={props.coinData.coinPrice[1].currency}
                        price={props.coinData.coinPrice[1].price}
                    />
                    <PriceCard
                        currency={props.coinData.coinPrice[0].currency}
                        price={props.coinData.coinPrice[0].price}
                    />
                </CoinCardContentPriceWrap>
                <CoinCardContentPercentWrap height="50%">
                    <CoinCardContentPercent color={props.coinData.changePercent >= 0 ? "#00d17f" : "#e84562"}>
                        {props.coinData.changePercent >= 0 ? "+" : ""} {Math.round(props.coinData.changePercent * 100) / 100} %
                    </CoinCardContentPercent>
                </CoinCardContentPercentWrap>
            </CoinCardContentWrap>
        </CoinCardWrap>
    )
}

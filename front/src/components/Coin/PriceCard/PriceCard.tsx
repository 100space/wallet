import { PriceCardCurreny, PriceCardValue, PriceCardWrap } from "./styled/PriceCard.styled"
import { ICoinPrice } from "@utils/interFace/coin.interface"

export const PriceCard = ({ currency, price }: ICoinPrice) => {
    return (
        <PriceCardWrap>
            <PriceCardCurreny>
                {currency}
            </PriceCardCurreny>
            <PriceCardValue>
                {price ? price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : 0}
            </PriceCardValue>
        </PriceCardWrap>
    )
}
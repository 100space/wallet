import { PriceCardCurreny, PriceCardValue, PriceCardWrap } from "./styled/PriceCard.styled"
import { IPriceCard } from "@utils/interFace/core"

export const PriceCard = ({ currency, price}: IPriceCard) => {
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
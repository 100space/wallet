import { PriceCardCurreny, PriceCardValue, PriceCardWrap } from "./styled/PriceCard.styled"

export interface IPriceCard {
    currency: string
    price: number
}

export const PriceCard = ({ currency, price}: IPriceCard) => {
    return (
        <PriceCardWrap>
            <PriceCardCurreny>
                {currency}
            </PriceCardCurreny>
            <PriceCardValue>
                {price}
            </PriceCardValue>
        </PriceCardWrap>
    )
}
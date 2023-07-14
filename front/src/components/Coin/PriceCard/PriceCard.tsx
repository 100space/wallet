import { PriceCardCurreny, PriceCardValue, PriceCardWrap } from "./styled/PriceCard.styled"
import { ICoinPrice } from "@utils/interFace/coin.interface"

export const PriceCard = ({ currency, price }: ICoinPrice) => {
    return (
        <PriceCardWrap>
            <PriceCardCurreny>{currency}</PriceCardCurreny>
            <PriceCardValue>{price ? price.toString().replace(/\d(?=(\d{3})+\b)/g, "$&,") : 0}</PriceCardValue>
        </PriceCardWrap>
    )
}

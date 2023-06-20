import { ICoinRow } from "@utils/interFace/styled.interface"
import { CoinRowContent } from "./CoinRow.styled"

export const CoinRowPrice = ({width, price}: ICoinRow) => {
    return(
        <CoinRowContent width={width}>
            {price ? price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : 0}
        </CoinRowContent>
    )
}
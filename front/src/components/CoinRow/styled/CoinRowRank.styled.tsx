import { ICoinRow } from "@utils/interFace/styled.interface"
import { CoinRowContent } from "./CoinRow.styled"

export const CoinRowRank = ({ width, rank }: ICoinRow) => {
    return(
        <CoinRowContent width={width}>
            {rank}
        </CoinRowContent>
    )
}
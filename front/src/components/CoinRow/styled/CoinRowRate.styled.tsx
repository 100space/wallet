import { CoinRowContent } from "./CoinRow.styled"
import { ICoinRow } from "@utils/interFace/styled.interface"

export const CoinRowRate = ({ width, rate }: ICoinRow) => {
    return(
        <CoinRowContent width={width} color={rate ? '#00d17f' : '#e84562'}>
            {rate ? '+' : '-'} {rate} %
        </CoinRowContent>
    )
}
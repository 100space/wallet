import { CoinContent } from "./Coin.styled"
import { ICoin } from "@utils/interFace/styled.interface"

export const CoinRate = ({ width, rate }: ICoin) => {
    return(
        <CoinContent width={width} color={(rate && rate >= 0) ? '#00d17f' : '#e84562'}>
            {(rate && rate >= 0) ? '+' : ''} {rate} %
        </CoinContent>
    )
}
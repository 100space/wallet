import { ICoinRate } from "@utils/interFace/coin.interface"
import { CoinContent } from "./Coin.styled"

export const CoinRate = ({ width, changePercent }: ICoinRate) => {
    return(
        <CoinContent width={width} color={(changePercent && changePercent >= 0) ? '#00d17f' : '#e84562'}>
            {(changePercent && changePercent >= 0) ? '+' : ''} {changePercent} %
        </CoinContent>
    )
}
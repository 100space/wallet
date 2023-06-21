import { ICoinRank } from "@utils/interFace/coin.interface"
import { CoinContent } from "./Coin.styled"

export const CoinRank = ({ width, rank }: ICoinRank) => {
    return(
        <CoinContent width={width}>
            {rank}
        </CoinContent>
    )
}
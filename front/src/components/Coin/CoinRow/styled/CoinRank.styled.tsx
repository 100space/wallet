import { ICoin } from "@utils/interFace/styled.interface"
import { CoinContent } from "./Coin.styled"

export const CoinRank = ({ width, rank }: ICoin) => {
    return(
        <CoinContent width={width}>
            {rank}
        </CoinContent>
    )
}
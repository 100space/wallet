import { ICoinRank } from "@utils/interFace/coin.interface"
import { CoinContent } from "./Coin.styled"
import { useGetMode } from "@hooks/useMode"

export const CoinRank = ({ width, rank }: ICoinRank) => {
    const [modeState, setModeState] = useGetMode()
    return(
        <CoinContent mode={modeState.mode} width={width}>
            {rank}
        </CoinContent>
    )
}
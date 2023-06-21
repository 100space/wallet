import { CoinInforHeader, CoinInfoWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"


export const CoinInfo = () => {
    const [modeState, setChange] = useGetMode()

    return(
        <CoinInfoWrap mode={modeState.mode}>
            <CoinInforHeader />
        </CoinInfoWrap>
    )
}
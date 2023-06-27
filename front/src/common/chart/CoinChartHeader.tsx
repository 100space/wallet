import { useRecoilValue } from "recoil"
import { CoinChartHeaderWrap, CoinChartHedaerContent } from "./styled"
import { ModeState } from "@utils/localStorage"

export const CoinChartHeader = () => {
    const { mode } = useRecoilValue(ModeState)
    return (
        <CoinChartHeaderWrap mode={mode}>
            <CoinChartHedaerContent width={"12.5%"}>순위</CoinChartHedaerContent>
            <CoinChartHedaerContent width={"27.5%"}>코인</CoinChartHedaerContent>
            <CoinChartHedaerContent width={"45%"}>가격</CoinChartHedaerContent>
            <CoinChartHedaerContent width={"15%"}>등락률</CoinChartHedaerContent>
        </CoinChartHeaderWrap>
    )
}

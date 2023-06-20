import { CoinChartHeaderWrap, CoinChartHedaerContent } from "./styled"

export const CoinChartHeader = () => {
    return(
        <CoinChartHeaderWrap>
            <CoinChartHedaerContent width={"12.5%"}>순위</CoinChartHedaerContent>
            <CoinChartHedaerContent width={"27.5%"}>코인</CoinChartHedaerContent>
            <CoinChartHedaerContent width={"45%"}>가격</CoinChartHedaerContent>
            <CoinChartHedaerContent width={"15%"}>등락률</CoinChartHedaerContent>
        </CoinChartHeaderWrap>
    )
}
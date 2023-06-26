import { ICoin } from "@utils/interFace/coin.interface"
import { CoinChartHeader } from "./CoinChartHeader"
import { CoinChartWrap } from "./styled"
import { CoinRow } from "@components/Coin"

export const CoinChart = (props: { coinDatas: ICoin[] }) => {
    const coinList = (coinsData: ICoin[]) => {
        return coinsData.map((v, i) => {
            return <CoinRow coinData={v} key={i}></CoinRow>
        })
    }

    return (
        <CoinChartWrap>
            <CoinChartHeader />
            {coinList(props.coinDatas)}
        </CoinChartWrap>
    )
}

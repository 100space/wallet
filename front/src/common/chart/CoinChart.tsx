import { ICoin } from "@utils/interFace/styled.interface"
import { CoinChartHeader } from "./CoinChartHeader"
import { CoinChartWrap } from "./styled"
import { CoinRow } from "@components/Coin"

export const CoinChart = ( props : { coinDatas: ICoin[]}) => {

    const coinList = (coinsData: ICoin[]) => {
        return coinsData.map((v) => {
            return (
                <CoinRow coinData={v}></CoinRow>
            )
        })
    }

    return(
        <CoinChartWrap>
            <CoinChartHeader />
            {coinList(props.coinDatas)}
        </CoinChartWrap>
    )
}
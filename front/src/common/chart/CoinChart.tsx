import { ICoin, ICoinInfo } from "@utils/interFace/coin.interface"
import { CoinChartHeader } from "./CoinChartHeader"
import { CoinChartWrap } from "./styled"
import { CoinRow } from "@components/Coin"
import requestServer from "@utils/axios/requestServer"
import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"
import { MouseEvent } from "react"

export const CoinChart = (props: {
    coinDatas: ICoin[],
    setCoin: React.Dispatch<React.SetStateAction<{
        isLoading: boolean;
        isError: unknown;
        data: ICoinInfo;
    }>>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean
}) => {

    const handleClick = async (e: MouseEvent, data: string) => {
        await getCoin(data)
        props.setIsOpen(!props.isOpen)
    }

    const getCoin = async (symbol: string) => {
        props.setCoin(prev => ({ isLoading: true, isError: null, data: { ...prev.data } }))
        try {
            const response = await requestServer.post('/trends', { symbol })
            props.setCoin(prev => ({ isLoading: false, isError: null, data: response.data }))
        } catch (error) {
            if (error instanceof Error)
                props.setCoin(({ isLoading: false, isError: error, data: {} as ICoinInfo }))
        }

    }

    const coinList = (coinsData: ICoin[]) => {
        return coinsData.map((v, i) => {
            return <CoinRow coinData={v} key={i} onClick={handleClick} />
        })
    }

    return (
        <CoinChartWrap>
            <CoinChartHeader />
            {coinList(props.coinDatas)}
        </CoinChartWrap>
    )
}

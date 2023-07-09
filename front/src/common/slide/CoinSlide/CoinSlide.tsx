import { CoinSlideWrap, CoinSlideSubject, CoinSlider } from "./styled"
import { ICoin, ICoinInfo } from "@utils/interFace/coin.interface"
import { CoinCard } from "@components/Coin"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { MouseEvent } from "react"
import requestServer from "@utils/axios/requestServer"



export const CoinSlide = (props: {
    coinDatas: ICoin[],
    setCoin: React.Dispatch<React.SetStateAction<{
        isLoading: boolean;
        isError: unknown;
        data: ICoinInfo;
    }>>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean
}) => {
    const { mode } = useRecoilValue(ModeState)
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
    const coinCards = (coinsData: ICoin[]) => {
        return coinsData.map((v, i) => {
            return <CoinCard coinData={v} key={i} onClick={handleClick} />
        })
    }

    return (
        <CoinSlideWrap mode={mode}>
            <CoinSlideSubject mode={mode}>추천 코인</CoinSlideSubject>
            <CoinSlider>{coinCards(props.coinDatas)}</CoinSlider>
        </CoinSlideWrap>
    )
}

import { CoinSlideWrap, CoinSlideSubject, CoinSlider } from "./styled"
import { ICoin } from "@utils/interFace/coin.interface"
import { CoinCard } from "@components/Coin"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { useGetMode } from "@hooks/useMode"

export const CoinSlide = (props: { coinDatas: ICoin[] }) => {
    const { mode } = useRecoilValue(ModeState)
    const [modeState, setChange] = useGetMode()
    const coinCards = (coinsData: ICoin[]) => {
        return coinsData.map((v, i) => {
            return <CoinCard coinData={v} key={i} />
        })
    }

    return (
        <CoinSlideWrap mode={modeState.mode}>
            <CoinSlideSubject mode={mode}>추천 코인</CoinSlideSubject>
            <CoinSlider>{coinCards(props.coinDatas)}</CoinSlider>
        </CoinSlideWrap>
    )
}

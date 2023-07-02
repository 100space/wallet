import { CoinSlideWrap, CoinSlideSubject, CoinSlider } from "./styled"
import { ICoin } from "@utils/interFace/coin.interface"
import { CoinCard } from "@components/Coin"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"

export const CoinSlide = (props: { coinDatas: ICoin[] }) => {
    const { mode } = useRecoilValue(ModeState)
    const coinCards = (coinsData: ICoin[]) => {
        return coinsData.map((v, i) => {
            return <CoinCard coinData={v} key={i} />
        })
    }

    return (
        <CoinSlideWrap>
            <CoinSlideSubject mode={mode}>추천 코인</CoinSlideSubject>
            <CoinSlider>{coinCards(props.coinDatas)}</CoinSlider>
        </CoinSlideWrap>
    )
}

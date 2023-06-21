import { CoinSlideWrap, CoinSlideSubject, CoinSlider } from "./styled"
import { ICoin } from "@utils/interFace/coin.interface"
import { CoinCard } from "@components/Coin"

export const CoinSlide = (props: { coinDatas : ICoin[] }) => {

    const coinCards = (coinsData: ICoin[]) => {
        return coinsData.map((v) => {
            return <CoinCard coinData={v} />
        })
    }

    return(
        <CoinSlideWrap>
            <CoinSlideSubject>
                추천 코인
            </CoinSlideSubject>
            <CoinSlider>
                {coinCards(props.coinDatas)}
            </CoinSlider>
        </CoinSlideWrap>
    )
}
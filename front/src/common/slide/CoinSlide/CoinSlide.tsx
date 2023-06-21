import { CoinSlideWrap, CoinSlideSubject, CoinSlider } from "./styled"
import { ICoinCard } from "@utils/interFace/coin.interface"
import { CoinCard } from "@components/Coin"

export const CoinSlide = (props: { coinDatas : ICoinCard[] }) => {

    const coinCards = (coinsData: ICoinCard[]) => {
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
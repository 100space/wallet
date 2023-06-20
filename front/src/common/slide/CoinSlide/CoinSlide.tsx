import { CoinSlideWrap, CoinSlideSubject, CoinSlider } from "./styled"
import { ICoinCardData } from "@utils/interFace/core"
import { CoinCard } from "@components/Coin"

export const CoinSlide = (props: { coinDatas : ICoinCardData[] }) => {

    const coinCards = (coinsData: ICoinCardData[]) => {
        return coinsData.map((v) => {
            return <CoinCard props={v} />
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
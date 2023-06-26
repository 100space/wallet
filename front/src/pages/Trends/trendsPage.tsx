import { CoinInfo } from "@common/Infomation"
import { ICoinInfo } from "@utils/interFace/coin.interface"

const data: ICoinInfo = {
    marketCap: 5,
    totalSupply: 83177035118,
    maxSupply: 83177035118,
    circulatingSupply: 21000000,
    description: "테더(USDT)의 메타마스크 추가를 통해 토큰 보유량 조회, 탈중앙화 거래소에서의 거래 등이 가능해집니다. 추가하려면 USDT을(를) 토큰으로서 내보내기해야 합니다. USDT의 계약 주소(0xdac17f958d2ee523a2206206994597c13d831ec7)를 복사한 다음 수동으로 내보내거나, 메타마스크의 크롬(Chrome) 확장 프로그램을 설치한 경우 CoinGecko에서 클릭 한 번으로 USDT의 메타마스크 추가가 가능합니다.",
    name: "Tether",
    symbol: "USDT",
    image: "https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663",
    rank: 4,
    changePercent: 0.3,
    currency: "USD",
    price: 1.00
}

export const TrendsPage = () => {
    return (
        <>
            <CoinInfo coinInfo={data} />
        </>
    )
}

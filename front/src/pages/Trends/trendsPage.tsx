import { Filter } from "@common/Filter"
import { CoinInfo } from "@common/Infomation"
import { CoinChart } from "@common/chart"
import { CoinSlide } from "@common/slide"
import { PlatWrap } from "@styled/index"
import { useQuery } from "@tanstack/react-query"
import requestServer from "@utils/axios/requestServer"
import { ICoin, ICoinInfo } from "@utils/interFace/coin.interface"
import { useEffect, useState } from "react"

const data: ICoinInfo = {
    marketCap: 5,
    totalSupply: 83177035118,
    maxSupply: 83177035118,
    circulatingSupply: 21000000,
    description:
        "테더(USDT)의 메타마스크 추가를 통해 토큰 보유량 조회, 탈중앙화 거래소에서의 거래 등이 가능해집니다. 추가하려면 USDT을(를) 토큰으로서 내보내기해야 합니다. USDT의 계약 주소(0xdac17f958d2ee523a2206206994597c13d831ec7)를 복사한 다음 수동으로 내보내거나, 메타마스크의 크롬(Chrome) 확장 프로그램을 설치한 경우 CoinGecko에서 클릭 한 번으로 USDT의 메타마스크 추가가 가능합니다.",
    name: "Tether",
    symbol: "USDT",
    image: "https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663",
    rank: 4,
    changePercent: 0.3,
    currency: "USD",
    price: 1.0,
}

const icoin: ICoin = {
    coinPrice: [
        { currency: "KRW", price: 13000 },
        { currency: "USD", price: 10 },
    ],
    name: "Tether",
    symbol: "USDT",
    image: "https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663",
    changePercent: 0,
    rank: 1,
}

export const TrendsPage = () => {
    const [coins, setCoins] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as ICoin[]
    })

    const getCoins = async () => {
        setCoins(prev => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const result = await requestServer.get('/trends')
            // console.log(result)
            setCoins(prev => ({ isLoading: false, isError: null, data: [...prev.data, ...result.data] }))
        } catch (error) {
            console.log(error)
            setCoins(prev => ({ isLoading: false, isError: error, data: [] }))
        }
    }

    useEffect(() => {
        getCoins()
    }, [])

    // if( coins.isLoading ) return <></>
    // if( coins.isError ) return <>{coins.isError}</>
    return (
        <>
            <CoinSlide coinDatas={coins.data} />
            <Filter filterList={["이름순", "가격순", "등락순"]} />
            <CoinChart coinDatas={coins.data}></CoinChart>
            {/* <CoinInfo coinInfo={data} /> */}
        </>
    )
}

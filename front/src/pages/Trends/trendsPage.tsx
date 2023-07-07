import { Filter } from "@common/Filter"
import { CoinInfo } from "@common/Infomation"
import { CoinChart } from "@common/chart"
import { ErrorPage } from "@common/error"
import { CoinSlide } from "@common/slide"
import { LoadingBar } from "@components/loading"
import requestServer from "@utils/axios/requestServer"
import { ICoin, ICoinInfo } from "@utils/interFace/coin.interface"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const TrendsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [coin, setCoin] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: {} as ICoinInfo
    })
    const [coins, setCoins] = useState({
        isLoading: false,
        isError: null as null | AxiosResponse<any, any> | undefined,
        data: [] as ICoin[]
    })

    const getCoins = async (sort: string = "rank") => {
        setCoins(prev => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const result = await requestServer.get(`/trends?sort=${sort}`)
            setCoins(prev => ({ isLoading: false, isError: null, data: [...prev.data, ...result.data] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setCoins({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    useEffect(() => {
        getCoins()
    }, [])

    if (coins.isLoading) return <LoadingBar />
    if (coins.isError && typeof (coins.isError.status) === "number") return <ErrorPage code={coins.isError.status} message={coins.isError.data.message} />
    return (
        <>
            {
                isOpen ?
                    <CoinInfo coinInfo={coin.data} setIsOpen={setIsOpen} isOpen={isOpen} />
                    :
                    <>
                        <CoinSlide coinDatas={coins.data} setCoin={setCoin} setIsOpen={setIsOpen} isOpen={isOpen} />
                        <Filter filterList={["랭킹순", "이름순", "가격순"]} />
                        <CoinChart coinDatas={coins.data} setCoin={setCoin} setIsOpen={setIsOpen} isOpen={isOpen} />
                    </>
            }
        </>
    )
}
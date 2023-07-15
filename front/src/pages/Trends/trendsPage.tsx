import { Filter } from "@common/Filter"
import { CoinInfo } from "@common/Infomation"
import { CoinChart } from "@common/chart"
import { ErrorPage } from "@common/error"
import { CoinSlide } from "@common/slide"
import { LoadingBar } from "@components/loading"
import StepLoader from "@components/loading/stepLoading"
import requestServer from "@utils/axios/requestServer"
import { ICoin, ICoinInfo } from "@utils/interFace/coin.interface"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const TrendsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [coin, setCoin] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: {} as ICoinInfo,
    })
    const [coins, setCoins] = useState({
        isLoading: false,
        isError: null as null | AxiosResponse<any, any> | undefined,
        data: [] as ICoin[],
    })
    const [coinSlide, setCoinSlide] = useState({
        isLoading: false,
        isError: null as null | AxiosResponse<any, any> | undefined,
        data: [] as ICoin[],
    })

    const [selected, setSelected] = useState<boolean[]>([true, false, false])

    const getCoins = async (sort: string) => {
        setCoins((prev) => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const result = await requestServer.get(`/trends?sort=${sort}`)
            setCoins((prev) => ({ isLoading: false, isError: null, data: [...result.data] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setCoins({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    const getSlideCoins = async (sort: string = "changePercent") => {
        setCoinSlide((prev) => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const result = await requestServer.get(`/trends?sort=${sort}`)
            setCoinSlide((prev) => ({ isLoading: false, isError: null, data: [...result.data] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setCoinSlide({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    useEffect(() => {
        const sort = selected[0] === true ? "rank" : selected[1] === true ? "price" : "name"
        getCoins(sort)
        getSlideCoins()
    }, [selected])

    if (coins.isLoading) return <StepLoader />
    if (coins.isError && typeof coins.isError.status === "number")
        return <ErrorPage code={coins.isError.status} message={coins.isError.data.message} />
    return (
        <>
            {isOpen ? (
                <CoinInfo coinInfo={coin.data} setIsOpen={setIsOpen} isOpen={isOpen} />
            ) : (
                <>
                    <CoinSlide coinDatas={coinSlide.data} setCoin={setCoin} setIsOpen={setIsOpen} isOpen={isOpen} />
                    <Filter selected={selected} setSelected={setSelected} />
                    <CoinChart coinDatas={coins.data} setCoin={setCoin} setIsOpen={setIsOpen} isOpen={isOpen} />
                </>
            )}
        </>
    )
}

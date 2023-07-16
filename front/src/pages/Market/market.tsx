import { NFTCardList, NFTRowList } from "@common/List"
import { ErrorPage } from "@common/error"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { NFTSlide } from "@common/slide/NFTSlide"
import { Category } from "@components/Category"
import { NFTSearch } from "@components/Search"
import { LoadingBar } from "@components/loading"
import StepLoader from "@components/loading/stepLoading"
import requestServer from "@utils/axios/requestServer"
import { INFTCard, INFTCardByMarket, INFTStandard, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { SelectedCollection } from "@utils/localStorage"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilState } from "recoil"

export const MarketPage = () => {
    const navigator = useNavigate()
    const location = useLocation()
    const [search, setSearch] = useState("")
    const [nfts, setNfts] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as INFTCardByMarket[],
    })
    const [nftCa, setNftCa] = useRecoilState(SelectedCollection)

    const getNFTs = async () => {
        setNfts((prev) => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const response = await requestServer.get("/market")
            setNfts((prev) => ({ isLoading: false, isError: null, data: [...response.data] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNfts({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    const getNFTsBySerach = async (search: string) => {
        setNfts((prev) => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const response = await requestServer.get(`/market?search=${search}`)
            setNfts((prev) => ({ isLoading: false, isError: null, data: [...response.data] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNfts({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    const getSearchValue = (pathName: string) => {
        return pathName.split("=")[1]
    }

    useEffect(() => {
        getSearchValue(location.search)
        getNFTsBySerach(search)
    }, [search])

    useEffect(() => {

    }, [location.search])

    const handleBackBtn = (e: MouseEvent) => {
        getNFTs()
        setSearch("")
        navigator('/market')
    }

    useEffect(() => {
        getNFTs()
    }, [])

    if (nfts.isLoading) return <StepLoader />
    if (nfts.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
            {search ? <BackBtnHeader content={"검색결과"} onClick={handleBackBtn} /> : <></>}
            <NFTSearch search={search} setSearch={setSearch} />
            {!search ? (
                <>
                    <Category
                        category={"인기 컬렉션"}
                        onClick={() => {
                            navigator("/market/hot")
                        }}
                    />
                    <NFTRowList nftRows={nfts.data} setNftCa={setNftCa} />
                    <Category
                        category={"최근 등록된 컬렉션"}
                        onClick={() => {
                            navigator("/market/new")
                        }}
                    />
                    <NFTSlide nftCards={nfts.data} setNftCa={setNftCa} />
                </>
            ) : (
                <>
                    <NFTCardList nftCards={nfts.data} />
                </>
            )}
        </>
    )
}

import { NFTCardList } from "@common/List"
import { ErrorPage } from "@common/error"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { LoadingHeader } from "@common/header/LoadingHeader"
import { LoadingBar } from "@components/loading"
import requestServer from "@utils/axios/requestServer"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import { SelectedCollection } from "@utils/localStorage"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilState } from "recoil"

export const NFTCollection = () => {
    const [collection, setCollection] = useRecoilState(SelectedCollection)
    const location = useLocation()
    const navigate = useNavigate()
    const [nfts, setNfts] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as INFTCardByMarket[]
    })

    const getNFTs = async (contractAddress: string) => {
        setNfts(prev => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const response = await requestServer.post('/market', { ca: contractAddress })
            setNfts({ isLoading: false, isError: null, data: [...response.data] })
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNfts({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    const clickBackBtn = (e: MouseEvent) => {
        navigate('/market')
    }

    const createPath = (pathname: string) => {
        const url = pathname.split("/")
        return url[url.length - 1]
    }

    useEffect(() => {
        getNFTs(createPath(location.pathname))
    }, [])

    if (nfts.isLoading) return (
        <>
            <LoadingHeader />
            <LoadingBar />
        </>
    )
    if (nfts.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
            <BackBtnHeader content={collection.name} onClick={clickBackBtn} />
            <NFTCardList nftCards={nfts.data} />
        </>
    )
}
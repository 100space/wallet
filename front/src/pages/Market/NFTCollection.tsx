import { NFTCardList } from "@common/List"
import { ErrorPage } from "@common/error"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { LoadingBar } from "@components/loading"
import requestServer from "@utils/axios/requestServer"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"

interface INFTCollection {
    ca: string
    name: string
}

export const NFTCollection = ({ ca, name }: INFTCollection) => {
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

    useEffect(() => {
        getNFTs(ca)
    }, [])

    if (nfts.isLoading) return <LoadingBar />
    if (nfts.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
            <BackBtnHeader content={name} onClick={clickBackBtn} />
            <NFTCardList nftCards={nfts.data} />
        </>
    )
}
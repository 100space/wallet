import { NFTCardList } from "@common/List"
import { ErrorPage } from "@common/error"
import { LoadingBar } from "@components/loading"
import requestServer from "@utils/axios/requestServer"
import { INFTCard, INFTCardByMarket } from "@utils/interFace/nft.interface"
import axios from "axios"
import { useEffect, useState } from "react"

interface INFTCollection {
    ca: string
}

export const NFTCollection = ({ ca }: INFTCollection) => {
    const [nfts, setNfts] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as INFTCardByMarket[]
    })

    const getNFTs = async () => {
        setNfts({ isLoading: true, isError: null, data: [] })
        try {
            const response = await requestServer.post('/market', { ca })
            setNfts({ isLoading: false, isError: null, data: [...response.data] })
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNfts({ isLoading: false, isError: e.response, data: [] })
            }
        }
    }

    useEffect(() => {
        getNFTs()
    }, [])

    if (nfts.isLoading) return <LoadingBar />
    if (nfts.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
            <NFTCardList nftCards={nfts.data} />
        </>
    )
}
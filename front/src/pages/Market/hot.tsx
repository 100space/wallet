import { Filter } from "@common/Filter"
import { NFTCollectionList, NFTRowList } from "@common/List"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import requestServer from "@utils/axios/requestServer"
import { INFTRow } from "@utils/interFace/nft.interface"
import { SelectedCollection } from "@utils/localStorage"
import axios from "axios"
import { useState, useRef, useEffect, MouseEvent } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

export const HotPage = () => {
    const [nftCa, setNftCa] = useRecoilState(SelectedCollection)
    const navigate = useNavigate()
    const [observer, setObserver] = useState<IntersectionObserver | null>(null)
    const sentinelRef = useRef<HTMLDivElement>(null)
    const [nfts, setNfts] = useState({
        isLoading: false,
        isError: null as null | unknown,
        page: 1,
        data: [] as INFTRow[],
    })

    const getNFTs = async (page: number) => {
        setNfts((prev) => ({ ...prev, isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const response = await requestServer.get(`/market?page=${page}`)
            setNfts((prev) => ({
                ...prev,
                isLoading: false,
                isError: null,
                page: page + 1,
                data: [...prev.data, ...response.data],
            }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNfts({ isLoading: false, isError: e.response, page, data: [] })
            }
        }
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            getNFTs(nfts.page + 1)
        }
    }

    const handleBackBtn = (e: MouseEvent) => {
        navigate("/market")
    }

    useEffect(() => {}, [nfts.page])

    useEffect(() => {
        getNFTs(nfts.page)
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        }
        const observer = new IntersectionObserver(handleIntersection, options)
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current)
        }
        setObserver(observer)

        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <>
            <BackBtnHeader content={"Hot Collections"} onClick={handleBackBtn} />
            <NFTRowList nftRows={nfts.data} setNftCa={setNftCa} />
            <div ref={sentinelRef}></div>
        </>
    )
}

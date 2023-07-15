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
        console.log(page)
        setNfts((prev) => ({
            ...prev,
            isLoading: true, // 요청 시작
            isError: null,
        }))

        try {
            const response = await requestServer.get(`/market?page=${page}`)
            console.log(response.data)
            if (response.data.length === 0)
                return setNfts((prev) => ({
                    isLoading: false, // 요청 완료
                    isError: null,
                    page: page, // 이전 값 대신에 전달받은 page 값을 사용
                    data: [...prev.data, ...response.data], // 이전 값 대신에 nfts.data를 사용
                }))
            setNfts((prev) => ({
                isLoading: false, // 요청 완료
                isError: null,
                page: page + 1, // 이전 값 대신에 전달받은 page 값을 사용
                data: [...prev.data, ...response.data], // 이전 값 대신에 nfts.data를 사용
            }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNfts((prev) => ({
                    ...prev,
                    isLoading: false,
                    isError: e,
                    data: [],
                }))
            }
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    getNFTs(nfts.page)
                }
            },
            { threshold: 1.0 }
        )
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current)
        }
        return () => observer.disconnect()
    }, [nfts.page])

    const handleBackBtn = (e: MouseEvent) => {
        navigate("/market")
    }
    return (
        <>
            <BackBtnHeader content={"Hot Collections"} onClick={handleBackBtn} />
            <NFTRowList nftRows={nfts.data} setNftCa={setNftCa} />
            <div ref={sentinelRef}></div>
        </>
    )
}

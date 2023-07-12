import { Filter } from "@common/Filter"
import { NFTCollectionList } from "@common/List"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import requestServer from "@utils/axios/requestServer"
import { INFTRow } from "@utils/interFace/nft.interface"
import { SelectedCollection } from "@utils/localStorage"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"


export const NewPage = () => {
    const [nftCa, setNftCa] = useRecoilState(SelectedCollection)
    const navigate = useNavigate()
    const [nfts, setNfts] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as INFTRow[],
    })

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

    const handleBackBtn = (e: MouseEvent) => {
        navigate("/market")
    }

    useEffect(() => {
        getNFTs()
    }, [])

    return (
        <>
            <BackBtnHeader content={"New Collections"} onClick={handleBackBtn} />
            <NFTCollectionList nftCards={nfts.data} />
        </>
    )
}

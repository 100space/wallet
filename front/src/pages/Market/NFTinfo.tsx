import { NftInfomation, NftStandardInformation } from "@common/Infomation"
import { NftTxList } from "@common/List"
import { NftStatus } from "@common/NftStatus"
import { ErrorPage } from "@common/error"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { LoadingHeader } from "@common/header/LoadingHeader"
import { LoadingBar } from "@components/loading"
import { ImageForm, PlatWrap } from "@styled/index"
import requestServer from "@utils/axios/requestServer"
import { INFTInfomationByMarket } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { ModeState } from "@utils/localStorage"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilValue } from "recoil"

export const NFTInfoPage = () => {
    const { mode } = useRecoilValue(ModeState)
    const location = useLocation()
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as ITransaction[]
    })
    const [nft, setNft] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: {} as INFTInfomationByMarket | null
    })

    const getNFT = async ({ ca, tokenId }: { ca: string, tokenId: number }) => {
        setNft(prev => ({ isLoading: true, isError: null, data: null }))
        try {
            const response = await requestServer.post('/market/info', { ca, tokenId })
            setNft(prev => ({ isLoading: false, isError: null, data: response.data }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNft({ isLoading: false, isError: e.response, data: {} as INFTInfomationByMarket })
            }
        }
    }

    const getTranscation = async ({ ca, tokenId }: { ca: string, tokenId: number }) => {
        setTransaction(prev => ({ isLoading: true, isError: null, data: [] }))
        try {
            const response = await requestServer.post('/market/transaction', { ca, tokenId })
            console.log(response.data)
            setTransaction(prev => ({ isLoading: false, isError: null, data: response.data as ITransaction[] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setTransaction({ isLoading: false, isError: e.response, data: {} as ITransaction[] })
            }
        }
    }

    const createPath = (pathname: string) => {
        const url = pathname.split("/")
        return { ca: url[url.length - 2], tokenId: parseInt(url[url.length - 1]) }
    }

    const clickBackBtnHandler = (e: MouseEvent) => {
        navigate(`/market/collection/${createPath(location.pathname).ca}`)
    }

    useEffect(() => {
        getNFT(createPath(location.pathname))
        getTranscation(createPath(location.pathname))
    }, [])

    console.log(transaction.data)
    if (nft.isLoading || !nft.data || transaction.isLoading || transaction.data.length === 0) return (
        <>
            <LoadingHeader />
            <LoadingBar />
        </>
    )
    if (nft.isError || transaction.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
            <BackBtnHeader content={nft.data.nftName} onClick={clickBackBtnHandler} />
            <PlatWrap mode={mode}>
                <ImageForm
                    height={"75vw"}
                    src={nft.data.image}
                />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftStandardInformation sellPrice={nft.data.price} fee={nft.data.fee} nftName={nft.data.nftName} tokenId={nft.data.tokenId} like={0} creator={nft.data.creator} owner={nft.data.owner} collectionName={nft.data.collectionName} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftInfomation owner={{ subject: "소유자", value: nft.data.owner }} blockchain={{ subject: "블록체인", value: nft.data.blockchain }} ca={{ subject: "계약주소", value: nft.data.ca }} tokenId={{ subject: "토큰 ID", value: nft.data.tokenId }} tokenStandard={{ subject: "토큰 표준", value: nft.data.tokenStandard }} supply={{ subject: "공급량", value: nft.data.supply }} isTrade={{ subject: "판매", value: nft.data.isTrade }} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftTxList txList={transaction.data} />
            </PlatWrap>
        </>
    )
}

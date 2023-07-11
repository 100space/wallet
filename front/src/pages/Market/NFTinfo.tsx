import { NftInfomation, NftStandardInformation } from "@common/Infomation"
import { NftTxList } from "@common/List"
import { NftStatus } from "@common/NftStatus"
import { ErrorPage } from "@common/error"
import { TransactionRow } from "@components/Transaction"
import { LoadingBar } from "@components/loading"
import { ImageForm, PlatWrap } from "@styled/index"
import requestServer from "@utils/axios/requestServer"
import { INFTInfomationByMarket, INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { ModeState } from "@utils/localStorage"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { useRecoilValue } from "recoil"

const data3: ITransaction = {
    state: "sender",
    opponent: "0x00000000000000000000000000000000000000000000000000000",
    timestamp: "7월21일",
    amounts: [
        { currency: "KRW", amount: 4500 },
        { currency: "ETH", amount: 0.0005 },
    ],
}


export const NFTInfoPage = () => {
    const { mode } = useRecoilValue(ModeState)
    const location = useLocation()
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
            console.log(response.data)
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNft({ isLoading: false, isError: e.response, data: {} as INFTInfomationByMarket })
            }
        }
    }

    const createPath = (pathname: string) => {
        const url = pathname.split("/")
        return { ca: url[url.length - 2], tokenId: parseInt(url[url.length - 1]) }
    }

    useEffect(() => {
        getNFT(createPath(location.pathname))
    }, [])



    if (nft.isLoading || !nft.data) return <LoadingBar />
    if (nft.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
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
                <NftTxList txList={[data3, data3, data3, data3, data3]} />
            </PlatWrap>
        </>
    )
}

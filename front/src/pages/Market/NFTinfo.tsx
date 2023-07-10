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

// const data4: INFTStauts = {
//     blockchain: [
//         "블록체인",
//         ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"],
//     ],
//     supply: ["발행량", "100개"],
//     isTrade: ["거래가능", "99개"],
//     isSell: ["판매중", "50개"],
// }

const data5: INftInfomation = {
    owner: {
        subject: "내 계정 닉네임",
        value: "내 계정 주소"
    },
    blockchain: {
        subject: "블록체인",
        value: {
            name: "Polygon",
            image: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912"
        }
    },
    ca: {
        subject: "계약주소",
        value: "0x0000000000000000000000000000000000000000"
    },
    tokenId: {
        subject: "토큰 ID",
        value: 50
    },
    tokenStandard: {
        subject: "토큰 표준",
        value: "ERC 1155"
    },
}

interface INFTInfoPage {
    ca: string
    tokenId: number
}

export const NFTInfoPage = ({ ca, tokenId }: INFTInfoPage) => {
    const { mode } = useRecoilValue(ModeState)
    const [nft, setNft] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: {} as INFTInfomationByMarket | null
    })

    const getNFT = async () => {
        setNft(prev => ({ isLoading: true, isError: null, data: null }))
        try {
            const response = await requestServer.post('/market/info', { ca, tokenId })
            console.log(111111111111111, response)
            setNft(prev => ({ isLoading: false, isError: null, data: response.data }))
            console.log(ca, tokenId)
            console.log(response.data)
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNft({ isLoading: false, isError: e.response, data: {} as INFTInfomationByMarket })
            }
        }
    }

    useEffect(() => {
        getNFT()
        console.log(ca, tokenId)
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
            {/* <PlatWrap mode={mode}> */}
            {/* <NftStatus nftStatus={data4} /> */}
            {/* </PlatWrap> */}
            <PlatWrap mode={mode}>
                <NftInfomation nftInfo={data5} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftTxList txList={[data3, data3, data3, data3, data3]} />
            </PlatWrap>
        </>
    )
}

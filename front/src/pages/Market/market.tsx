
import { NFTRowList } from "@common/List"
import { ErrorPage } from "@common/error"
import { NFTSlide } from "@common/slide/NFTSlide"
import { Category } from "@components/Category"
import { NFTSearch } from "@components/Search"
import { LoadingBar } from "@components/loading"
import requestServer from "@utils/axios/requestServer"
import { INFTCard, INFTStandard, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { SelectedCollection } from "@utils/localStorage"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

// const data: INFTCard = {
//     ca: '0xCd7f3fe4f5a680cBaCbaFAc8Bd27eFB126Ab05C1',
//     name: "NONGDAMGOM",
//     image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
//     owner: "Char1ey",
//     prices: [
//         { currency: "KRW", price: 4500 },
//         { currency: "ETH", price: 0.0005 },
//     ],
// }

// const data2: INFTRow = {
//     ca: '0xCd7f3fe4f5a680cBaCbaFAc8Bd27eFB126Ab05C1',
//     rank: 11,
//     name: "NONGDAMGOM",
//     image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
//     owner: "Char1ey",
//     prices: [
//         { currency: "KRW", price: 4500 },
//         { currency: "ETH", price: 0.0005 },
//     ],
// }

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

export const MarketPage = () => {
    const navigator = useNavigate()
    const [nfts, setNfts] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as INFTCard[]
    })
    const [nftCa, setNftCa] = useRecoilState(SelectedCollection)


    const getNFTs = async () => {
        setNfts(prev => ({ isLoading: true, isError: null, data: [...prev.data] }))
        try {
            const response = await requestServer.get('/market')
            setNfts(prev => ({ isLoading: false, isError: null, data: [...response.data] }))
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
            <NFTSearch />
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
    )
}

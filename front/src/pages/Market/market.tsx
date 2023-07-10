
import { NFTRowList } from "@common/List"
import { ErrorPage } from "@common/error"
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

const data6: INFTStandard = {
    nftName: "Gdori",
    nftId: 1234,
    like: 1234,
    ownerImage: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
    owner: "asdf1387",
    collectionName: "asdfasdf",
    sellPrice: { currency: "ETH", price: 0.013 },
    chargePrice: { currency: "ETH", price: 0.0000013 },
}

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
            {/* <NFTSlide nftCards={[data, data, data, data, data, data, data]} setNftCa={setNftCa} /> */}
            {/* <NftRow nftInfo={data2} /> */}
            {/* <NftCard nftInfo={data} /> */}
            {/* <TransactionRow txInfo={data3} /> */}

            {/* <NftStandardInformation nftStandardInfo={data6} /> */}
            {/* <MyNftInformation /> */}
            {/* <NFTCardList nftCards={[data, data, data, data, data, data, data, data, data, data, data, data, data]} /> */}
        </>
    )
}

import { Filter } from "@common/Filter/Filter"
import { MyNftInformation } from "@common/Infomation/MyNftInformation"
import { NFTRowList } from "@common/List"
import { NFTCardList } from "@common/List/NFTCardList"
import { NftTxList } from "@common/List/NftTxList"
import { NftStatus } from "@common/NftStatus"
import { NftInfomation, NftStandardInformation } from "@common/index"
import { NFTSlide } from "@common/slide/NFTSlide"
import { Category } from "@components/Category"
import { NftCard, NftRow } from "@components/Nft"
import { NFTSearch } from "@components/Search"
import { TransactionRow } from "@components/Transaction"
import { INFTCard, INFTRow, INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { useNavigate } from "react-router"

const data: INFTCard = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [
        { currency: "KRW", price: 4500 },
        { currency: "ETH", price: 0.0005 },
    ],
}

const data2: INFTRow = {
    rank: 11,
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [
        { currency: "KRW", price: 4500 },
        { currency: "ETH", price: 0.0005 },
    ],
}

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
    console.dir(window.navigator.userAgent)
    return (
        <>
            {/* <NFTSearch />
            <Category
                category={"인기 NFT"}
                onClick={() => {
                    navigator("/market/hot")
                }}
            />
            <NFTRowList nftRows={[data2, data2, data2, data2, data2, data2]} /> */}
            {/* <NftRow nftInfo={data2} /> */}
            {/* <NftCard nftInfo={data} /> */}
            {/* <TransactionRow txInfo={data3} /> */}

            {/* <NftStandardInformation nftStandardInfo={data6} /> */}
                <MyNftInformation />
            {/* <Category
                category={"최근 등록된 NFT"}
                onClick={() => {
                    navigator("/market/new")
                }}
            />
            <NFTSlide nftCards={[data, data, data, data, data, data, data]} /> */}
            {/* <NFTCardList nftCards={[data, data, data, data, data, data, data, data, data, data, data, data, data]} /> */}
        </>
    )
}

import { Filter } from "@common/Filter/Filter"
import { NFTCardList } from "@common/List/NFTCardList"
import { NftInfo } from "@common/NftInfo"
import { NftStatus } from "@common/NftStatus"
import { Category } from "@components/Category"
import { NftCard, NftRow } from "@components/Nft"
import { TransactionRow } from "@components/Transaction"
import { INFTCard, INFTRow, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"

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

const data4: INFTStauts = {
    blockchain: [
        "블록체인",
        ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"],
    ],
    supply: ["발행량", "100개"],
    isTrade: ["거래가능", "99개"],
    isSell: ["판매중", "50개"],
}

const data5: INftInfomation = {
    owner: ["소유자", "0xasdgasdgasdgasdgasdgasdgasdgasdg"],
    blockchain: [
        "블록체인",
        ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"],
    ],
    ca: ["계약주소", "0xagdsdgasdgasdgasdgasdgasdg"],
    tokenId: ["토큰 ID", 50],
    tokenStandard: ["토큰 표준", "ERC 1155"],
}

export const MarketPage = () => {
    return (
        <>
            {/* <NftCard nftInfo={data}/>
            <NftRow nftInfo={data2}/>
            <TransactionRow txInfo={data3} /> */}
            {/* <NftStatus nftStatus={data4}/> */}
            {/* <NftInfomation nftInfo={data5} /> */}
            {/* <NftStandardInformation nftStandardInfo={data6} /> */}
            {/* <NftMarketList txList={[data3, data3, data3, data3, data3]} /> */}
            <Filter filterList={["인기순", "인기 컬렉션", "베스트 컬렉터", "가격순"]} />
            <Filter filterList={["최신순", "찜목록", "내 컬렉션"]} />
            {/* <Category category={"인기 NFT"} /> */}
            {/* <NFTSearch /> */}
            {/* <NFTSlide nftCards={[data, data, data, data, data, data, data]} /> */}
            {/* <NFTRowList nftRows={[data2, data2, data2, data2, data2, data2]} /> */}
            {/* <NFTCardList nftCards={[data, data, data, data, data, data, data, data, data, data, data, data, data]} /> */}
        </>
    )
}

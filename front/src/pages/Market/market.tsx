import { NftCard, NftRow } from "@components/Nft"
import { TransactionRow } from "@components/Transaction"
import { INFTRow } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"


const data = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [{currency: "KRW", price: 4500}, {currency: "ETH", price: 0.0005}]
}

const data2: INFTRow = {
    rank: 11,
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [{currency: "KRW", price: 4500}, {currency: "ETH", price: 0.0005}]
}

const data3: ITransaction = {
    state: "sender",
    opponent: "0x00000000000000000000000000000000000000000000000000000",
    timestamp: "7월21일",
    amounts: [{currency: "KRW", amount: 4500}, {currency: "ETH", amount: 0.0005}]
}

export const MarketPage = () => {
    return (
        <>
            <NftCard nftInfo={data}/>
            <NftRow nftInfo={data2}/>
            <TransactionRow txInfo={data3} />
        </>
    )
}

import { NftCard, NftRow } from "@components/Nft"
import { INFTRow } from "@utils/interFace/nft.interface"

const data = {
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

export const MarketPage = () => {
    return (
        <>
            {/* <NftCard nftInfo={data}/> */}
            <NftRow nftInfo={data2} />
        </>
    )
}

import { NftCard } from "@components/NftCard"

const data = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [{currency: "ETH", price: 0.0005}, {currency: "KRW", price: 4500}]
}

export const MarketPage = () => {
    return (
        <>
            <NftCard nftInfo={data}/>
        </>
    )
}

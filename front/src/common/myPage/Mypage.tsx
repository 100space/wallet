import { TotalSupply } from "@components/TotalSupply"
import { A, B, WR } from "./styled"
import { NftCard } from "@components/Nft/NftCard"
import { INFTCard } from "@utils/interFace/nft.interface"

const data: INFTCard = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [
        { currency: "KRW", price: 4500 },
        { currency: "ETH", price: 0.0005 },
    ],
}

export const Mypage = () => {
    return(
        <>
            <WR>
                <A src="/img/profile.jpeg"/>
                <B placeholder="NickName"/>
                <TotalSupply/>
                <NftCard nftInfo={data} className={""}/>
            </WR>
        </>
    )
}
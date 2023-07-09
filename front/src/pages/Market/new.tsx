import { Filter } from "@common/Filter"
import { NFTCardList } from "@common/List"
import { INFTCard } from "@utils/interFace/nft.interface"
import { SelectedNFTCa } from "@utils/localStorage"
import { useRecoilState } from "recoil"

// const data: INFTCard = {
//     name: "NONGDAMGOM",
//     image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
//     owner: "Char1ey",
//     prices: [
//         { currency: "KRW", price: 4500 },
//         { currency: "ETH", price: 0.0005 },
//     ],
// }
export const NewPage = () => {
    const [nftCa, setNftCa] = useRecoilState(SelectedNFTCa)

    return (
        <>
            <Filter filterList={["최신순", "찜목록", "내 컬렉션"]} />
            {/* <NFTCardList nftCards={[data, data, data, data, data, data, data]} setNftCa={setNftCa} /> */}
        </>
    )
}

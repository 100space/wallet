import { NFTInfoPage } from "@pages/Market"
import { CoinInfoPage } from "@pages/Trends"
import { NFTByCollection, SelectedCollection } from "@utils/localStorage"
import { Route, Routes } from "react-router"
import { useRecoilValue } from "recoil"

export const InfoRouter = () => {
    const nftInfo = useRecoilValue(NFTByCollection)

    return (
        <Routes>
            <Route path={`nft/${nftInfo.ca}/${nftInfo.tokenId}`} element={<NFTInfoPage ca={nftInfo.ca} tokenId={nftInfo.tokenId} />}></Route>
            <Route path="coin/:id" element={<CoinInfoPage />}></Route>
        </Routes>
    )
}

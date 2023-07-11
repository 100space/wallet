import { NFTInfoPage } from "@pages/Market"
import { CoinInfoPage } from "@pages/Trends"
import { NFTByCollection, SelectedCollection } from "@utils/localStorage"
import { Route, Routes } from "react-router"
import { useRecoilValue } from "recoil"

export const InfoRouter = () => {
    return (
        <Routes>
            <Route path={"nft/:ca/:tokenId"} element={<NFTInfoPage />}></Route>
            <Route path="coin/:id" element={<CoinInfoPage />}></Route>
        </Routes>
    )
}

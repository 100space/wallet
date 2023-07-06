import { NFTInfoPage } from "@pages/Market"
import { CoinInfoPage } from "@pages/Trends"
import { Route, Routes } from "react-router"

export const InfoRouter = () => {
    return (
        <Routes>
            <Route path="nft/:id" element={<NFTInfoPage />}></Route>
            <Route path="coin/:id" element={<CoinInfoPage />}></Route>
        </Routes>
    )
}

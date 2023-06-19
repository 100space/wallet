import { MarketPage, HotPage, NewPage, NFTInfoPage } from "@pages/Market"
import { Route, Routes } from "react-router"

export const MarketRouter = () => {
    return (
        <Routes>
            <Route path="" element={<MarketPage />}></Route>
            <Route path="hot" element={<HotPage />}></Route>
            <Route path="new" element={<NewPage />}></Route>
            <Route path="info" element={<NFTInfoPage />}></Route>
        </Routes>
    )
}

import { CoinInfoPage, TrendsPage } from "@pages/Trends"
import { Route, Routes } from "react-router"

export const TrandsRouter = () => {
    return (
        <Routes>
            <Route path="" element={<TrendsPage />}></Route>
            <Route path="coinInfo" element={<CoinInfoPage />}></Route>
        </Routes>
    )
}

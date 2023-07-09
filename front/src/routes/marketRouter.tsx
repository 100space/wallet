import { MarketPage, HotPage, NewPage, NFTInfoPage } from "@pages/Market"
import { SelectedNFTCa } from "@utils/localStorage"
import { Route, Routes } from "react-router"
import { useRecoilValue } from "recoil"

export const MarketRouter = () => {

    return (
        <Routes>
            <Route path="" element={<MarketPage />}></Route>
            <Route path="hot" element={<HotPage />}></Route>
            <Route path="new" element={<NewPage />}></Route>
        </Routes>
    )
}

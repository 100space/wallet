import { NFTInfoPage } from "@pages/Market"
import { CoinInfoPage } from "@pages/Trends"
import { SelectedCollection } from "@utils/localStorage"
import { Route, Routes } from "react-router"
import { useRecoilValue } from "recoil"

export const InfoRouter = () => {
    const collection = useRecoilValue(SelectedCollection)

    return (
        <Routes>
            <Route path={`nft/${collection.ca}`} element={<NFTInfoPage ca={collection.ca} />}></Route>
            <Route path="coin/:id" element={<CoinInfoPage />}></Route>
        </Routes>
    )
}

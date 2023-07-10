import { NFTCardList } from "@common/List"
import { MarketPage, HotPage, NewPage, NFTInfoPage } from "@pages/Market"
import { NFTCollection } from "@pages/Market/NFTCollection"
import { SelectedCollection } from "@utils/localStorage"
import { Route, Routes } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"

export const MarketRouter = () => {
    const [collection, setCollection] = useRecoilState(SelectedCollection)

    return (
        <Routes>
            <Route path="" element={<MarketPage />}></Route>
            <Route path="hot" element={<HotPage />}></Route>
            <Route path="new" element={<NewPage />}></Route>
            <Route path={`collection/${collection.ca}`} element={<NFTCollection ca={collection.ca} name={collection.name} />}></Route>
        </Routes>
    )
}

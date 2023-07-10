import { NFTInfoPage } from "@pages/Market"
import { CoinInfoPage } from "@pages/Trends"
import { SelectedNFTCa } from "@utils/localStorage"
import { Route, Routes } from "react-router"
import { useRecoilValue } from "recoil"

export const InfoRouter = () => {
    const nftCa = useRecoilValue(SelectedNFTCa)

    return (
        <Routes>
            <Route path={`nft/${nftCa}`} element={<NFTInfoPage ca={nftCa} />}></Route>
            <Route path="coin/:id" element={<CoinInfoPage />}></Route>
        </Routes>
    )
}

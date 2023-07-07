import { MainPage } from "@pages/Main"
import { Routes, Route, useLocation, useNavigate } from "react-router"
import { InitRouter } from "./InitRouter"
import { MarketRouter } from "./marketRouter"
import { SettingRouter } from "./settingRouter"
import { TrandsRouter } from "./trendsRouter"
import { NFTInfoPage } from "@pages/Market"
import { useRecoilValue } from "recoil"
import { ModeState, MyProfile } from "@utils/localStorage"
import { CoinInfoPage } from "@pages/Trends"
import { InfoRouter } from "./infoRouter"
import { NftInfomation } from "@common/Infomation"
import { Alarm } from "@common/alarm"
import { Scanner } from "@components/PopupItem/QR/scanner"

export const MainRouter = () => {
    const { myMnemonic, password, nickName } = useRecoilValue(MyProfile)
    const { isLogin } = useRecoilValue(ModeState)
    const pathName = useLocation()
    const navigator = useNavigate()
    console.log(isLogin)

    return (
        <>
            <Routes>
                {!isLogin ? (
                    <>
                        <Route path="/login/*" element={<InitRouter />}></Route>
                        <Route path="/" element={<MainPage />}></Route>
                        <Route path="/*" element={<MainPage />}></Route>
                    </>
                ) : (
                    <>
                        <Route path="/" element={<MainPage />}></Route>
                        <Route path="/*" element={<MainPage />}></Route>
                        <Route path="/*/alarm" element={<Alarm />}></Route>
                        <Route path="/setting/*" element={<SettingRouter />}></Route>
                        <Route path="/market/*" element={<MarketRouter />}></Route>
                        <Route path="/trends/*" element={<TrandsRouter />}></Route>
                        <Route path="/info/*" element={<InfoRouter />}></Route>
                    </>
                )}
            </Routes>
        </>
    )
}


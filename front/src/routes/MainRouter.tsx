import { MainPage } from "@pages/Main"
import { Routes, Route } from "react-router"
import { InitRouter } from "./InitRouter"
import { MarketRouter } from "./marketRouter"
import { SettingRouter } from "./settingRouter"
import { TrandsRouter } from "./trendsRouter"

export const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/login/*" element={<InitRouter />}></Route>
                <Route path="/setting/*" element={<SettingRouter />}></Route>
                <Route path="/market/*" element={<MarketRouter />}></Route>
                <Route path="/trends/*" element={<TrandsRouter />}></Route>
            </Routes>
            /
        </>
    )
}

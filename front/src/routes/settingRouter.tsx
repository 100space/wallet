import { NetWorkPage, SettingPage } from "@pages/Setting"
import { Route, Routes } from "react-router"

export const SettingRouter = () => {
    return (
        <Routes>
            <Route path="" element={<SettingPage />}></Route>
            <Route path="network" element={<NetWorkPage />}></Route>
        </Routes>
    )
}

import { InitPage, LoginPage } from "@pages/Login"
import { Route, Routes } from "react-router"

export const InitRouter = () => {
    return (
        <Routes>
            <Route path="" element={<LoginPage />}></Route>
            <Route path="init" element={<InitPage />}></Route>
        </Routes>
    )
}

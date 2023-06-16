import { MainPage } from "@pages/Main"
import { Route, Routes } from "react-router"
import { InitRouter } from "./InitRouter"

export const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/login/*" element={<InitRouter />}></Route>
            </Routes>
        </>
    )
}

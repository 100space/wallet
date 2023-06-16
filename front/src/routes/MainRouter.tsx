import { MainPage } from "@pages/Main"
import { Route, Routes } from "react-router"

export const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
            </Routes>
        </>
    )
}

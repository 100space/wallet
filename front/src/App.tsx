import { Controller } from "@common/footer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"

import { InitRouter } from "routes"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"
import { CloseBtn } from "@components/CloseBtn"
import { SubList } from "@components/SettingBtn"
import { Footer } from "@components/Footer"

const App = () => {
    const [pathname, setPathname] = useState("")
    const pathName = useLocation().pathname as string
    useEffect(() => {
        setPathname(pathName)
    }, [pathName])

    return (
        <>
            <Header />
            <MainRouter />
            <Controller />
            <Footer/>
        </>
    )
}
export default App

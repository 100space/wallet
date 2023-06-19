import { Controller } from "@common/footer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"

import { InitRouter } from "routes"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"
import { TrendCard } from "@components/Trend"

const data = [{
        name: "Bitcoin",
        symbol: "BTC",
        image: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
        usdPrice: 25912.53,
        krwPrice: 33295826,
        changePercent: 3.22
    }]

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
            {data.map(v => <TrendCard props={v}/>)
            }
        </>
    )
}
export default App

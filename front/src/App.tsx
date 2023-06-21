import { Controller } from "@common/footer"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"
import { ModeState, InitMode } from "@utils/localStorage"
import { useRecoilState, useResetRecoilState } from "recoil"
import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { useLocation } from "react-router"
import { CoinInfo } from "@common/infomation"
import { ICoinInfo } from "@utils/interFace/coin.interface"

const data: ICoinInfo = {
    name: "바이낸스(Binance)",
    symbol: "BTC",
    image: "https://assets.coingecko.com/markets/images/52/thumb/binance.jpg?1519353250",
    rank: 1,
    changePercent: 7.7,
    currency: "KRW",
    price: 28870.97,
    marketCap: 560_250_467_028,
    totalSupply: 21_000_000,
    maxSupply: 21_000_000,
    circulatingSupply: 19_408_068,
    description: "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin."
}

const App = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const [modeState, setChange] = useGetMode()
    const location = useLocation().pathname
    console.log()
    const changeMode = () => {
        setChange(modeState.mode)
    }
    return (
        <>
            <RootWrap mode={modeState.mode}>
                <Header />
                    <CoinInfo coinInfo={data} />
                <MainRouter />
                {location.indexOf("/login") >= 0 ? <></> : <Controller />}
            </RootWrap>

            {screenHeight > 600 && screenWidth > 800 && screenWidth > screenHeight ? (
                <div className="modeChange" onClick={changeMode}>
                    모드 변환
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default App

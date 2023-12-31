import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { Body } from "@common/body"
import { Header } from "@common/header"
import { Controller } from "@common/Footer"
import { PopupComp } from "@components/bottomSheet"
import { useLocation, useNavigate } from "react-router"
import { useEffect } from "react"
import { Scanner } from "@components/PopupItem/QR/scanner"
import { useRecoilState, useRecoilValue } from "recoil"
import { IsPopUp, MyAccounts, MyInfo, MyNetwork, ScanOpen } from "@utils/localStorage"
import { MyNftInformation } from "@common/Infomation/MyNftInformation"
import { ethers } from "ethers"
import axios from "axios"
import { ITx } from "@utils/interFace/block.interface"
import { useQuery } from "@tanstack/react-query"
import { AlarmData, CurrentAddress, CurrentTxData, ExchangePrice, IsAlarm } from "@utils/localStorage/Alarm"
import requestServer from "@utils/axios/requestServer"

declare global {
    interface Window {
        ethereum?: any
        abc?: any
        ethers?: any
        // MyWallet: MyWallet
    }
}
const App = () => {
    const [modeState, setChange] = useGetMode()
    const scanOpen = useRecoilValue(ScanOpen)
    const myAccount = useRecoilValue(MyAccounts)
    const [tx, setTx] = useRecoilState(AlarmData)
    const [txList, setTxList] = useRecoilState(CurrentTxData)
    const [isAlarm, setIsAlarm] = useRecoilState(IsAlarm)
    const [exchange, setExchange] = useRecoilState(ExchangePrice)
    const [currentAddress, setCurrentAddress] = useRecoilState(CurrentAddress)
    const network = useRecoilValue(MyNetwork)
    const current = useRecoilValue(MyInfo)
    const navigator = useNavigate()
    const location = useLocation()
    const condition = !(location.pathname.indexOf("/login") >= 0)

    const getExChange = async () => {
        const response = await requestServer.post("/trends/current", { symbol: current[network].networks.symbol })
        setExchange(response.data)
    }

    const getTx = async () => {
        const { data } = await axios.get(
            `${current[network].apiURL}?module=account&action=txlist&address=${
                myAccount.address
            }&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${process.env[current[network].api]}`
        )
        if (data.message === "No transactions found") {
            setTxList([])
            setTx([{ hash: "" } as ITx])
            data.result = []
            return []
        }

        const txDatas = data.result.map((v: ITx) => {
            v.timeStamp = dateChange(Number(v.timeStamp))
            return v
        })
        setTxList(txDatas)
        setTx(txDatas)
        if (tx[0].hash !== "" && txDatas[0].hash !== tx[0].hash) {
            setCurrentAddress(myAccount.address)
            setIsAlarm(true)
        }
        const currentTime = new Date()
        return data.result as ITx[]
    }

    const dateChange = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${year}.${month}.${day}`
    }
    useQuery(["transactions"], getTx, { refetchInterval: 10000, refetchIntervalInBackground: true, enabled: condition })

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        ;(location.pathname === "/popup.html" || location.pathname === "/") && !modeState.isLogin && navigator("/login")
        getExChange()
        setCurrentAddress(myAccount.address)
    }, [])

    return (
        <>
            <RootWrap mode={modeState.mode}>
                <Header />
                <Body />
                <Controller />
                <PopupComp />
                {scanOpen && <Scanner />}
            </RootWrap>
        </>
    )
}
export default App

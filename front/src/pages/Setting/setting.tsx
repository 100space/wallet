import { MenuListComp } from "@common/settingCon/settingMenu"
import { PrivateExport } from "@components/PrivateExport"
import { ModeState, MyProfile } from "@utils/localStorage"
import { constants } from "buffer"
import { type } from "os"
// import MyWallet from "core"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useResetRecoilState } from "recoil"
import Web3, { WebSocketProvider, providers } from "web3"

export const SettingPage = () => {
    const navigator = useNavigate()
    const clearModeState = useResetRecoilState(ModeState)
    const clearMyAccount = useResetRecoilState(MyProfile)

    const localStorageClear = () => {
        clearModeState()
        clearMyAccount()
        navigator("/")
    }
    const herehandler = () => {}

    return (
        <>
            {/* <button onClick={localStorageClear}>Clear</button>
            <PrivateExport/>
            <button onClick={herehandler}>hetererwrwerwer</button> */}
            <MenuListComp />
        </>
    )
}

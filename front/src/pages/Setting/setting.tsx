import { ModeState, MyAccount } from "@utils/localStorage"
import { useNavigate } from "react-router"
import { useResetRecoilState } from "recoil"
import { SendComp, bringList } from "@components/PopupItem"

export const SettingPage = () => {
    const navigator = useNavigate()
    const clearModeState = useResetRecoilState(ModeState)
    const clearmyAccount = useResetRecoilState(MyAccount)
    const localStorageClear = () => {
        clearModeState()
        clearmyAccount()
        navigator("/")
    }
    return (
        <>
            <button onClick={localStorageClear}>Clear</button>
        </>
    )
}

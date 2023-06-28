import { ModeState, MyAccount } from "@utils/localStorage"
import { useNavigate } from "react-router"
import { useResetRecoilState } from "recoil"

export const SettingPage = () => {
    const navigator = useNavigate()
    const clearModeState = useResetRecoilState(ModeState)
    const clearMyAccount = useResetRecoilState(MyAccount)

    const localStorageClear = () => {
        clearModeState()
        clearMyAccount()
        navigator("/")
    }
    return (
        <>
            <button onClick={localStorageClear}>Clear</button>
        </>
    )
}

import { ModeState, InitMode, IsCheck } from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

export const MainPage = () => {
    const navigator = useNavigate()
    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    useEffect(() => {
        console.log(initState)
        if (!isCheck.step2.myMnemonic) navigator("/login")
    }, [])
    return <>main</>
}

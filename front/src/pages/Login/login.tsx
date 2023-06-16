import { InputComp } from "@components/input"
import { LogoComp } from "@components/Logo"
import { NavLink } from "react-router-dom"
import { useRecoilState, useResetRecoilState } from "recoil"
import { InitState } from "utils/localStorage"
import { LoginWrap } from "./styled"

export const LoginPage = () => {
    const [initState, setInitState] = useRecoilState(InitState)
    const reset = useResetRecoilState(InitState)

    const handleClick = () => {
        if (initState.isLogin !== false) return
        setInitState({ ...initState, isLogin: !initState.isLogin })
    }
    const handleClear = () => {
        reset()
    }

    return (
        <LoginWrap>
            <LogoComp></LogoComp>
            <div>
                {initState.isLogin && <InputComp height={5.6} width={90} type={"password"} />}
                <NavLink to="/login/init">123</NavLink>
                <button onClick={handleClick}>123</button>
                <button onClick={handleClear}>reset</button>
            </div>
        </LoginWrap>
    )
}

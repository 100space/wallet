import { InputComp } from "@components/input"
import { LogoComp } from "@components/Logo"
import { useGetMode } from "@hooks/useMode"
import { InitMode, ModeState } from "@utils/localStorage"
import React, { MouseEvent, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useRecoilState, useResetRecoilState } from "recoil"
import { LoginWrap } from "./styled"

export const LoginPage = () => {
    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [modeState, setChange] = useGetMode()
    const navigate = useNavigate()
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (initState.isLogin !== false) return
        if (e.currentTarget.innerHTML === "create") {
            setManageMode({ ...manageMode, initMode: "create" })
        } else {
            setManageMode({ ...manageMode, initMode: "manage" })
        }
        navigate("/login/init")
    }

    const changeMode = () => {
        setChange(modeState.mode)
    }

    return (
        <LoginWrap mode={modeState.mode}>
            <LogoComp></LogoComp>
            <div>
                {initState.isLogin && <InputComp height={5.6} width={90} type="password" />}
                <button onClick={handleClick}>create</button>
                <button onClick={handleClick}>already</button>
            </div>
            <div className="modeChange" onClick={changeMode}>
                모드 변환
            </div>
        </LoginWrap>
    )
}

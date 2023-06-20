import { Button } from "@components/Button"
import { InputComp } from "@components/input"
import { LogoComp } from "@components/Logo"
import { useGetMode } from "@hooks/useMode"
import { InitMode, ModeState } from "@utils/localStorage"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useResetRecoilState } from "recoil"
import { LoginWrap } from "./styled"

export const LoginPage = () => {
    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [modeState, setChange] = useGetMode()
    console.log(modeState)
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (initState.isLogin !== false) return
        if (e.currentTarget.innerHTML === "create") {
            setManageMode({ ...manageMode, initMode: "create" })
        } else {
            setManageMode({ ...manageMode, initMode: "manage" })
        }
        navigate("/login/init")
    }

    const content = ["create", "manage"]
    const Buttons = () =>
        content.map((v) => (
            <Button
                onClick={handleClick}
                width={"90%"}
                height={"5.6rem"}
                mode={modeState.mode}
                margin={"3rem auto 0rem"}
                content={v}
            />
        ))

    return (
        <LoginWrap mode={modeState.mode}>
            <LogoComp></LogoComp>
            <div>
                {initState.isLogin && <InputComp height={5.6} width={90} type="password" />}
                {Buttons()}
            </div>
        </LoginWrap>
    )
}

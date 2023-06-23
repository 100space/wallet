import { Button } from "@components/Button"
import { InputComp } from "@components/input"
import { LogoComp } from "@components/Logo"
import { useGetMode } from "@hooks/useMode"
import { InitMode, IsCheck, ModeState } from "@utils/localStorage"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useResetRecoilState } from "recoil"
import { LoginWrap } from "./styled"

export const LoginPage = () => {
    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [modeState, setChange] = useGetMode()
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (initState.isLogin !== false) return
        if (e.currentTarget.innerHTML === "create") {
            setManageMode({ ...manageMode, initMode: "create" })
            navigate("/login/init")
        } else if (e.currentTarget.innerHTML === "manage") {
            setManageMode({ ...manageMode, initMode: "manage" })
            navigate("/login/init")
        } else if (e.currentTarget.innerHTML === "enter") {
            navigate("/")
        } else if (e.currentTarget.innerHTML === "forget") {
            setManageMode({ ...manageMode, initMode: "manage" })
            navigate("/login/init")
        }
    }

    const content = isCheck.step2.password ? ["enter", "forget"] : ["create", "manage"]

    const Buttons = () =>
        content.map((v) => (
            <Button
                onClick={handleClick}
                width={"90%"}
                height={"5.6rem"}
                mode={modeState.mode}
                margin={"3rem auto 0rem"}
                content={v}
                key={v}
            />
        ))
    useEffect(() => {}, [])

    return (
        <LoginWrap mode={modeState.mode}>
            <LogoComp></LogoComp>
            <div>
                {!initState.isLogin && <InputComp width={90} type="password" />}
                {Buttons()}
            </div>
        </LoginWrap>
    )
}

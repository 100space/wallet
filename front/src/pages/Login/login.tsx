import { Alert } from "@components/Alert/alert"
import { Button } from "@components/Button"
import { InputComp } from "@components/input"
import { LogoComp } from "@components/Logo"
import { useGetMode } from "@hooks/useMode"
import { CryptoPassword } from "@utils/crypto/crypto"
import { InitMode, IsCheck, ModeState, MyAccount } from "@utils/localStorage"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { LoginWrap } from "./styled"

export const LoginPage = () => {
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [pw, setPw] = useState("")
    const [{ myMnemonic, password, nickName }, setMyAccounts] = useRecoilState(MyAccount)
    const [modeState, setChange] = useGetMode()
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (modeState.isLogin !== false) return
        if (e.currentTarget.innerHTML === "create") {
            setManageMode({ ...manageMode, initMode: "create" })
            return navigate("/login/init")
        } else if (e.currentTarget.innerHTML === "manage") {
            setManageMode({ ...manageMode, initMode: "manage" })
            return navigate("/login/init")
        } else if (e.currentTarget.innerHTML === "enter") {
            const inputPw = CryptoPassword(pw)
            console.log(modeState)
            console.log(password)
            console.log(inputPw)
            if (password !== inputPw) return Alert.fire({ icon: "error", title: "비밀번호가 틀렸습니다." })
            Alert.fire({ icon: "success", title: "성공적으로 로그인했습니다" })
            return navigate("/")
        } else if (e.currentTarget.innerHTML === "forget") {
            setManageMode({ ...manageMode, initMode: "manage" })
            setChange({ ...modeState, isLogin: true })
            return navigate("/login/init")
        }
    }
    const content = password ? ["enter", "forget"] : ["create", "manage"]
    const handlerChange = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setPw(value)
    }

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
    useEffect(() => {
        console.log(modeState)
    }, [])

    return (
        <LoginWrap mode={modeState.mode}>
            <LogoComp></LogoComp>
            <div>
                {!modeState.isLogin && password && myMnemonic && (
                    <InputComp width={90} type="password" onChange={handlerChange} />
                )}
                {Buttons()}
            </div>
        </LoginWrap>
    )
}

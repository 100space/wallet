import { InitMode, ModeState } from "@utils/localStorage"
import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"

export const useGetMode = () => {
    const modeState = useRecoilValue(ModeState)
    const setMode = useSetRecoilState(ModeState)

    console.log(InitMode)
    const setChange = () => {
        setMode((prevMode: { isLogin: boolean; mode: string }) => ({
            ...prevMode,
            mode: prevMode.mode === "lightMode" ? "darkMode" : "lightMode",
        }))
    }

    if (modeState.mode === undefined) return ["lightMode", setMode as React.Dispatch<React.SetStateAction<string>>]

    return [modeState, setChange]
}

import { ModeState } from "@utils/localStorage"
import { useRecoilValue, useSetRecoilState } from "recoil"

export const useGetMode = () => {
    const modeState = useRecoilValue(ModeState)
    const setMode = useSetRecoilState(ModeState)
    const setChange = () => {
        setMode((prevMode: { isLogin: boolean; mode: string }) => ({
            ...prevMode,
            mode: prevMode.mode === "lightMode" ? "darkMode" : "lightMode",
        }))
    }

    if (modeState.mode === undefined) return ["lightMode", setMode as React.Dispatch<React.SetStateAction<string>>]

    return [modeState, setChange]
}

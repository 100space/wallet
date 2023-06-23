import { ModeState } from "@utils/localStorage"
import { useRecoilValue, useSetRecoilState } from "recoil"

export const useGetMode = () => {
    const modeState = useRecoilValue(ModeState)
    const setMode = useSetRecoilState(ModeState)
    const setChange = ({ isLoginState, isModeState }: { isLoginState?: boolean; isModeState?: string }) => {
        setMode((prevMode: { isLogin: boolean; mode: string }) => ({
            ...prevMode,
            isLogin: isLoginState !== undefined ? isLoginState : prevMode.isLogin,
            mode: isModeState !== undefined ? isModeState : prevMode.mode,
        }))
    }

    if (modeState.mode === undefined) return ["lightMode", setMode as React.Dispatch<React.SetStateAction<string>>]

    return [modeState, setChange]
}

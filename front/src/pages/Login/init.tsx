import { InitMode } from "@utils/localStorage"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

export const InitPage = () => {
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    console.log(manageMode)

    useEffect(() => {
        setManageMode({
            ...manageMode,
            initStep: manageMode.initMode === "create" ? "first" : "second",
        })
    }, [])
    return <>asdfasdfasdfasdfasdf</>
}

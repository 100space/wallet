import { FunctionWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"

export const FunctionBtn = () => {
    const [modeState, setChange] = useGetMode()

    return (
        <>
            <FunctionWrap mode={modeState.mode}>
                <Icon icon="gg:qr" />
                <Icon icon="ph:bell" />
                {/* {modeState ? <Icon icon="ph:bell-fill" /> : <Icon icon="ph:bell" />} */}
            </FunctionWrap>
        </>
    )
}

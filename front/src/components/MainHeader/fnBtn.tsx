import { Scanner } from "@components/PopupItem/QR/scanner"
import { FunctionWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { useNavigate } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"
import { ScanOpen } from "@utils/localStorage"

export const FunctionBtn = () => {
    const [modeState, setChange] = useGetMode()
    const [scanOpen, setScanOpen] = useRecoilState(ScanOpen)
    return (
        <>
            <FunctionWrap mode={modeState.mode}>
                <Icon icon="gg:qr" onClick={() => setScanOpen(!scanOpen)} />
                <Icon icon="ph:bell" />
                {/* {mxodeState ? <Icon icon="ph:bell-fill" /> : <Icon icon="ph:bell" />} */}
            </FunctionWrap>
        </>
    )
}

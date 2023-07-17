import { Alarm } from "@common/alarm"
import { FunctionWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Scanner } from "@components/PopupItem/QR/scanner"
import { useNavigate } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"
import { ScanOpen } from "@utils/localStorage"
import { ThemeToggle } from "@components/ThemeToggle"
import { IsAlarm } from "@utils/localStorage/Alarm"

export const FunctionBtn = () => {
    const [modeState, setChange] = useGetMode()
    const [fnBtnstate, setfnBtnState] = useState(false)
    const isAlarm = useRecoilValue(IsAlarm)
    const [scanOpen, setScanOpen] = useRecoilState(ScanOpen)

    const bellClick = () => {
        setfnBtnState(!fnBtnstate)
    }

    return (
        <>
            <FunctionWrap mode={modeState.mode}>
                <ThemeToggle />
                <Icon icon="gg:qr" onClick={() => setScanOpen(!scanOpen)} />
                <NavLink style={{ fontSize: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }} to="/alarm">
                    {!isAlarm ? <Icon icon="ph:bell" onClick={bellClick} /> :
                        <>
                            <Icon icon="ph:bell" onClick={bellClick} className="after"
                            ></Icon><span></span>
                        </>

                    }
                </NavLink>
                {/* {modeState ? <Icon icon="ph:bell-fill" /> : <Icon icon="ph:bell" />} */}
            </FunctionWrap>
        </>
    )
}

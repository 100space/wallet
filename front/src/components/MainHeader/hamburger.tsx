import { useGetMode } from "@hooks/useMode"
import React, { useState } from "react"
import styled from "styled-components"
import { HamburgerWrap, HamburgerStick } from "./styled"

export const HamburgerBtn = () => {
    const [modeState, setChange] = useGetMode()
    const [sidebar, setSidebar] = useState(false)

    const handleClick = (e: React.MouseEvent) => {
        setSidebar(!sidebar)
    }
    return (
        <HamburgerWrap mode={modeState.mode} sidebarstate={sidebar.toString()} onClick={handleClick}>
            <HamburgerStick></HamburgerStick>
            <HamburgerStick></HamburgerStick>
            <HamburgerStick></HamburgerStick>
        </HamburgerWrap>
    )
}

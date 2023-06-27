import { useGetMode } from "@hooks/useMode"
import React, { useState } from "react"
import styled from "styled-components"
import { HamburgerWrap, HamburgerStick } from "./styled"
import { useRecoilState } from "recoil"
import { IsSideBar } from "@utils/localStorage"

export const HamburgerBtn = () => {
    const [modeState, setChange] = useGetMode()
    const [sidebar, setSidebar] = useRecoilState(IsSideBar)

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

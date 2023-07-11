import { Category } from "@components/Category"
import { SetBtnWrap, SettingMenuTitle, SubWrap } from "./styled"
import { Btn } from "@components/Button"
import { NavLink, Router } from "react-router-dom"
import React from "react"
import { useGetMode } from "@hooks/useMode"

const MenuList = [
    { MenuSub: "Wallet", content: "Current Wallet", content2: "Network" },
    { MenuSub: "Market", content: "NFT market" },
    { MenuSub: "Help", content: "FAQ" },
]

interface IMenu {
    MenuSub: string
    content: string
    content2: string
}

export const MenuListComp = () => {
    const [modeState, setChange] = useGetMode()
    const handleButtonClick = (e: MouseEvent) => {
        console.log("click")
    }
    return (
        <>
            {MenuList.map((menu, index) => (
                <SettingMenuTitle key={index} mode={modeState.mode}>
                    <SubWrap mode={modeState} style={{ textDecorationLine: "underline" }}>
                        {menu.MenuSub}
                    </SubWrap>
                    <Category category={menu.content} onClick={(e: MouseEvent) => handleButtonClick(e)} />
                    {menu.content2 && (
                        <NavLink to="network">
                            <Category category={menu.content2} onClick={(e: MouseEvent) => handleButtonClick(e)} />
                        </NavLink>
                    )}
                </SettingMenuTitle>
            ))}
            <SetBtnWrap>
                <Btn
                    backgroundcolor="#f71e1e"
                    color="white"
                    fontSize="1.85rem"
                    width="80%"
                    height="5rem"
                    margin="2rem"
                    mode=""
                    onClick={() => handleButtonClick}
                    profile={"true"}>
                    계정 지우기
                </Btn>
            </SetBtnWrap>
        </>
    )
}

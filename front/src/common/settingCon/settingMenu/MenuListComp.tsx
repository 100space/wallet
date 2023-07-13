import { Category } from "@components/Category"
import { SetBtnWrap, SettingMenuTitle, SubWrap } from "./styled"
import { Btn } from "@components/Button"
import { NavLink, Router } from "react-router-dom"
import React from "react"
import { useGetMode } from "@hooks/useMode"
import { ConfirmAlert, ConfirmComp } from "@components/Alert/alert"

const MenuList = [
    { MenuSub: "Wallet", content: "Network" },
    { MenuSub: "Market", content: "NFT market" },
    { MenuSub: "Help", content: "FAQ" },
]

interface IMenu {
    MenuSub: string
    content?: string
    content2: string
}

export const MenuListComp = () => {
    const [modeState, setChange] = useGetMode()
    const handleButtonClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const { innerHTML } = target
        if (innerHTML.indexOf("NFT market") > -1) {
            window.open("https://roof-top.shop", "_blank")
        }
        if (innerHTML.indexOf("계정 지우기") > -1) {
            ConfirmComp()
            console.log("계정 지우기")
        }
    }
    return (
        <>
            {MenuList.map((menu, index) => (
                <SettingMenuTitle key={index} mode={modeState.mode}>
                    {menu.content === "Network" ? (
                        <>
                            <SubWrap mode={modeState.mode} style={{ textDecorationLine: "underline" }}>
                                {menu.MenuSub}
                            </SubWrap>
                            <NavLink to="network">
                                <Category category={menu.content} />
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <SubWrap mode={modeState.mode} style={{ textDecorationLine: "underline" }}>
                                {menu.MenuSub}
                            </SubWrap>
                            <Category category={menu.content} onClick={(e: MouseEvent) => handleButtonClick(e)} />
                        </>
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
                    onClick={(e: MouseEvent) => handleButtonClick(e)}
                    profile={"true"}
                >
                    계정 지우기
                </Btn>
            </SetBtnWrap>
        </>
    )
}

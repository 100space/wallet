import { Category } from "@components/Category"
import { SettingMenuTitle } from "./styled"
import { Btn } from "@components/Button"
import { NavLink, Router } from "react-router-dom"
import React from "react"

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
    const handleButtonClick = (e: MouseEvent) => {}
    return (
        <>
            {MenuList.map((menu, index) => (
                <SettingMenuTitle key={index}>
                    <h1>{menu.MenuSub}</h1>
                    <Category
                        category={menu.content}
                        onClick={function (): void {
                            throw new Error("Function not implemented.")
                        }}
                    />
                    {menu.content2 && (
                        <NavLink to="network">
                            <Category
                                category={menu.content2}
                                onClick={function (): void {
                                    throw new Error("Function not implemented.")
                                }}
                            />
                        </NavLink>
                    )}
                </SettingMenuTitle>
            ))}
            <Btn
                backgroundcolor=""
                fontSize="1.85rem"
                width="80%"
                height="5rem"
                margin="2rem"
                mode=""
                onClick={() => handleButtonClick}
                profile={"true"}
            >
                계정 지우기
            </Btn>
        </>
    )
}

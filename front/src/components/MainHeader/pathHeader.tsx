import { IsPopUp, ModeState, MyAccounts } from "@utils/localStorage"
import { useLocation } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"
import { HeaderSubJect } from "./styled"
import { Icon } from "@iconify/react"
import { useState } from "react"

export const PathHeader = () => {
    const pathName = useLocation().pathname
    const { mode } = useRecoilValue(ModeState)
    const { alias } = useRecoilValue(MyAccounts)
    const [{ isOpen, contents }, setIsPopUp] = useRecoilState(IsPopUp)

    const handleClick = () => {
        setIsPopUp({ isOpen: !isOpen, contents: "My Account" })
    }

    const checkPathName =
        pathName.indexOf("/setting") >= 0
            ? "setting"
            : pathName.indexOf("/market") >= 0
            ? "market"
            : pathName.indexOf("/trends") >= 0
            ? "trends"
            : "main"
    switch (checkPathName) {
        case "setting":
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    Settings
                </HeaderSubJect>
            )
        case "market":
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    NFT Market
                </HeaderSubJect>
            )
        case "trends":
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    Coin Trend & Explore
                </HeaderSubJect>
            )
        default:
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    {alias ? alias : "Untitled"}
                    <Icon icon={"ep:arrow-up-bold"} rotate={2} width={"2.4rem"} height={"100%"} onClick={handleClick} />
                </HeaderSubJect>
            )
    }
}

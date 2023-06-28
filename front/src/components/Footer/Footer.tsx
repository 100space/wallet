import { Alert } from "@components/Alert/alert"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { NavLink, useLocation } from "react-router-dom"
import { FooterWrap, FooterWrapper, IconWrapper } from "./styled"
import { MouseEvent, useEffect, useState } from "react"
import { IfooterList } from "@utils/interFace/core"
import { useRecoilValue } from "recoil"
import { IsSideBar } from "@utils/localStorage"

export const footerProduce = [
    { path: "/", iconPath: "clarity:coin-bag-line", content: "Assets" },
    { path: "/market", iconPath: "mdi:marketplace-outline", content: "Market" },
    { path: "/trends", iconPath: "fluent-mdl2:market", content: "Trends" },
    { path: "/setting", iconPath: "uil:setting", content: "Settings" },
]

export const Footer = () => {
    const location = useLocation().pathname
    const [modeState, setChange] = useGetMode()
    const [isSelected, setIsSelected] = useState([true, false, false, false])
    const sideBar = useRecoilValue(IsSideBar)

    const nav =
        location.indexOf("/market") >= 0
            ? [false, true, false, false]
            : location.indexOf("/trends") >= 0
            ? [false, false, true, false]
            : location.indexOf("/setting") >= 0
            ? [false, false, false, true]
            : location.indexOf("/info") >= 0
            ? [false, false, false, false]
            : [true, false, false, false]

    const renderFooter = (footerArray: IfooterList[]) => {
        return footerArray.map((v, index) => {
            return (
                <IconWrapper
                    mode={modeState.mode}
                    color={isSelected[index] ? "true" : "false"}
                    key={index}
                    width={"100%"}
                >
                    {sideBar ? (
                        <NavLink to={location}>
                            <Icon icon={v.iconPath} />
                            {v.content}
                        </NavLink>
                    ) : (
                        <NavLink to={v.path}>
                            <Icon icon={v.iconPath} />
                            {v.content}
                        </NavLink>
                    )}
                </IconWrapper>
            )
        })
    }
    useEffect(() => {
        setIsSelected(nav)
    }, [location])
    return (
        <>
            {location.indexOf("/login") >= 0 ? (
                <></>
            ) : (
                <FooterWrapper mode={modeState.mode}>
                    <FooterWrap>{renderFooter(footerProduce)}</FooterWrap>
                </FooterWrapper>
            )}
        </>
    )
}

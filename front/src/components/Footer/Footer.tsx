import { Alert } from "@components/Alert/alert"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { NavLink, useLocation } from "react-router-dom"
import { FooterWrap, FooterWrapper, IconWrapper } from "./styled"
import { MouseEvent, useState } from "react"
import { IfooterList } from "@utils/interFace/core"

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

    const renderFooter = (footerArray: IfooterList[]) => {
        const handleClick = (e: MouseEvent, select: number, v: string) => {
            Alert.fire({ icon: "info", title: v })
            const updatedSelected = isSelected.map((value, index) => index === select)
            setIsSelected(updatedSelected)
        }
        return footerArray.map((v, index) => {
            return (
                <IconWrapper
                    onClick={(e) => handleClick(e, index, v.content)}
                    mode={modeState.mode}
                    color={isSelected[index] ? "true" : "false"}
                    key={index}
                >
                    <NavLink to={v.path}>
                        <Icon icon={v.iconPath} />
                        {v.content}
                    </NavLink>
                </IconWrapper>
            )
        })
    }

    return (
        <FooterWrapper mode={modeState.mode}>
            {location.indexOf("/login") >= 0 ? <></> : <FooterWrap>{renderFooter(footerProduce)}</FooterWrap>}
        </FooterWrapper>
    )
}

import { Toast } from "@components/Alert/alert"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { NavLink, useLocation } from "react-router-dom"
import { FooterWrap, FooterWrapper, IconWrapper } from "./styled"

export interface IfooterList {
    path: string
    iconPath: string
    content: string
}

export const footerProduce = [
    { path: "/", iconPath: "clarity:coin-bag-line", content: "Assets" },
    { path: "/market", iconPath: "mdi:marketplace-outline", content: "Market" },
    { path: "/trends", iconPath: "fluent-mdl2:market", content: "Trends" },
    { path: "/setting", iconPath: "uil:setting", content: "Settings" },
]

interface IEvent {}
export const Footer = () => {
    const location = useLocation().pathname
    const [modeState, setChange] = useGetMode()
    const renderFooter = (footerArray: IfooterList[]) => {
        const handleClick = (v: string) => {
            Toast.fire({ icon: "info", title: v })
        }
        return footerArray.map((v, index, array) => (
            <IconWrapper onClick={() => handleClick(v.content)} mode={modeState.mode}>
                <NavLink to={v.path}>
                    <Icon icon={v.iconPath} />
                    {v.content}
                </NavLink>
            </IconWrapper>
        ))
    }

    return (
        <FooterWrapper mode={modeState.mode}>
            {location.indexOf("/login") >= 0 ? <></> : <FooterWrap>{renderFooter(footerProduce)}</FooterWrap>}
        </FooterWrapper>
    )
}

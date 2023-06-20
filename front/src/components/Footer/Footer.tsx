import { Icon } from "@iconify/react"
import { NavLink } from "react-router-dom"
import { FooterWrap, FooterWrapper, IconWrapper } from "./styled"

export interface IfooterList {
    iconPath: string
    content: string
}

export const footerProduce = [
    { iconPath: "clarity:coin-bag-line", content: "Assets" },
    { iconPath: "mdi:marketplace-outline", content: "Market" },
    { iconPath: "fluent-mdl2:market", content: "Trends" },
    { iconPath: "uil:setting", content: "Settings" },
]

const mainFoot = () => {
    return <></>
}

export const Footer = () => {
    const renderFooter = (footerArray: IfooterList[]) =>
        footerArray.map((v, index, array) => (
            <IconWrapper>
                <NavLink to="/market">
                    <Icon icon={v.iconPath} />
                    {v.content}
                </NavLink>
            </IconWrapper>
        ))

    return (
        <>
            <FooterWrapper>
                <FooterWrap>{renderFooter(footerProduce)}</FooterWrap>
            </FooterWrapper>
        </>
    )
}

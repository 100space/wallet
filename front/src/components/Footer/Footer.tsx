import { FooterWrapper, FooterWrap, IconWrapper } from "./styled/Footer.styled"
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";

export interface IfooterList{
    iconPath: string
    content: string
    path: string
}

export const footerProduce = [
    {iconPath: "clarity:coin-bag-line", content: "Assets", path:"/Assets"},
    {iconPath: "mdi:marketplace-outline", content: "Market", path:"Market/*"},
    {iconPath: "fluent-mdl2:market", content: "Trends", path:"Trends/*"},
    {iconPath: "uil:setting", content: "Settings", path:"Setting/*"},
]


export const Footer = () => {
    const renderFooter = (footerArray:IfooterList[]) => {
        return(
            footerArray.map((v, index, array) => {
                return(
                    <>
                        <IconWrapper>
                            <NavLink to={v.path} className="active">
                                <Icon icon={v.iconPath}/>
                                {v.content}
                            </NavLink>
                        </IconWrapper>
                    </>
                )
            })
        )
    }
    
    return(
        <>
            <FooterWrapper>
                <FooterWrap>
                    {renderFooter(footerProduce)}
                </FooterWrap>
            </FooterWrapper>
        </>
    )
}
import React from "react"
import { FooterWrapper, FooterWrap, IconWrapper } from "./styled/Footer.styled"
import { Icon } from '@iconify/react';

export interface IfooterList{
    iconPath: string
    content: string
}

export const footerProduce = [
    {iconPath: "clarity:coin-bag-line", content: "Assets"},
    {iconPath: "mdi:marketplace-outline", content: "Market"},
    {iconPath: "fluent-mdl2:market", content: "Trends"},
    {iconPath: "uil:setting", content: "Settings"},
]


export const Footer = () => {
    const renderFooter = (footerArray:IfooterList[]) => {
        return(
            footerArray.map((v, index, array) => {
                return(
                    <>
                        <IconWrapper>
                            <Icon icon={v.iconPath}/>
                            {v.content}
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
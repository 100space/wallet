import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const RowWrap = styled.div<ISizeProps>`
    margin: 0 auto;
    padding: 0rem 0.75rem;
    ${SizePropsStyled};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: ${({theme, mode}) => mode && theme[mode].bg200};
`

export const RowContentsWrap = styled.div<ISizeProps>`
    ${SizePropsStyled}; 
    padding: 0.5rem;
    box-sizing: border-box;

    & > div:nth-child(2) > div {
        line-height: ${({ height }) => (height && typeof height === "string") && parseFloat(height) / 2 + 'rem'};
    }
`

export const RowContentWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding-left: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    box-sizing: border-box;
    color: ${({ mode, theme }) => mode && theme[mode].text};
    font-size: 1.2rem;
    font-weight: 500;
    & > div + div {
        text-align: right;
    }
`

export const RowContent = styled.div<ISizeProps>`
    ${SizePropsStyled};
`
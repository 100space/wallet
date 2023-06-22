import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NftRowWrap = styled.div<ISizeProps>`
    padding: 0rem 0.75rem;
    ${SizePropsStyled};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: ${({theme, mode}) => mode && theme[mode].bg200};
`

export const NftRowContentsWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding: 0.5rem;
    box-sizing: border-box;

    & > div:nth-child(2) > div {
        line-height: ${({ height }) => (height && typeof height === "string") && parseFloat(height) / 2 + 'rem'};
    }
`

export const NftRowContentWrap = styled.div<ISizeProps>`
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

export const NftRowContent = styled.div<ISizeProps>`
    ${SizePropsStyled};
`
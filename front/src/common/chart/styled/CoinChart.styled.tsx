import { Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinChartWrap = styled.div<ISizeProps>`
    padding: 0.25rem 0;
    width: 100%;
    background-color: ${({ theme, mode }) => (mode && theme[mode].basicBg) || "#3d3d3d"};
    border-radius: 1rem;
    ${Shadow};
`

export const CoinChartHeaderWrap = styled.header<ISizeProps>`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 4.8rem;
    border-bottom: 0.1rem solid #00000075;
`

export const CoinChartHedaerContent = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    min-height: ${({ height }) => height || "4.8rem"};
    color: ${({ theme, mode }) => mode && theme[mode].text};
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    line-height: ${({ height }) => height || "4.8rem"};
`

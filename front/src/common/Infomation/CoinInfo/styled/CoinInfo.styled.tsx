import { Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinInfoWrap = styled.div<ISizeProps>`
    margin: 2rem 0;
    min-width: 36rem;
    width: ${({ width }) => width || "100%"};
    min-height: 15rem;
    /* background-color: ${({ theme, mode }) => mode && theme[mode].desBg};  */
    border-radius: 1rem;
    ${Shadow}
`

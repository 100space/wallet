import { Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const TotalWrap = styled.div<ISizeProps>`
    height: fit-content;
    background: ${({ theme, mode }) => mode && theme[mode].bg200};
    ${Shadow}
    padding: 2rem;
    margin: 0 0 2rem 0;
    border-radius: 2rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
    & > div {
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
    & .account {
        font-size: 1.4rem !important;
    }
    & > div + div {
        margin-top: 3rem;
    }
`

import { Shadow } from "@styled/index"
import { ISizeProps, IProfileProps } from "@utils/interFace/styled.interface"
import { profile } from "console"
import { styled } from "styled-components"

export const TotalWrap = styled.div<IProfileProps>`
    height: fit-content;
    background: ${({ theme, mode, profile}) =>
        (mode && theme[mode].basicBg)};
    box-shadow: none;
    padding: 2rem;
    margin: 0 0 2rem 0;
    color: ${({ theme, mode }) => (mode && theme[mode].text)};
    & > div {
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
    & > div + div {
        margin-top: 3rem;
    }
`

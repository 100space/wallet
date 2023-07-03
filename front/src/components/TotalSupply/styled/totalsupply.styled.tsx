import { Shadow } from "@styled/index"
import { ISizeProps, IProfileProps } from "@utils/interFace/styled.interface"
import { profile } from "console"
import { styled } from "styled-components"

export const TotalWrap = styled.div<IProfileProps>`
    ${({ profile }) => !profile && Shadow};
    height: fit-content;
    background: ${({ theme, mode, profile }) =>
        (profile && "rgba(212, 212, 212, 0.3), 0.3)") || (mode && theme[mode].bg200)};
    box-shadow: none;
    padding: 2rem;
    margin: 0 0 2rem 0;
    margin: ${({ profile }) => (profile === "true" && "0") || "0 0 2rem 0"};
    border-radius: ${({ profile }) => (profile === "true" && "none") || "2rem"};
    color: ${({ theme, mode, profile }) => (profile === "true" && "white") || (mode && theme[mode].text)};
    & > div {
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
    & .account {
        font-size: ${({ profile }) => (profile === "true" && "1rem") || "1.4rem !important"};
    }
    & > div + div {
        margin-top: 3rem;
    }
`

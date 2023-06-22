import { FlexCenter } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const LoginWrapper = styled.div<ISizeProps>`
    width: 100%;
    height: 5rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme, mode }) => mode && theme[mode].basicDeepBg};
    color: ${({ theme, mode }) => mode && theme[mode].text};
`

export const Backspace = styled.img`
    width: 10%;
`

export const IconWrap = styled.div<ISizeProps>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    & > .headerItem {
        ${FlexCenter}
        justify-content: center;
        flex-direction: row;
        width: 100%;
    }
`

export const Icons = styled.img`
    width: 2rem;
`

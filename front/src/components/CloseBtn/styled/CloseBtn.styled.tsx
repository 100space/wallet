import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const BtnWrap = styled.div<ISizeProps>`
    width: 5.6rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme, mode }) => mode && theme[mode].text};
    border-radius: 0.8rem;
    border: 0.2rem solid ${({ theme, mode }) => mode && theme[mode].text};
    font-size: 1.4rem;
    cursor: pointer;
    & > svg {
        color: ${({ theme, mode }) => mode && theme[mode].text};
        font-size: 1.7rem;
    }
`

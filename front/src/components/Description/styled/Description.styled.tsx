import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const DescriptWrap = styled.div<ISizeProps>`
    width: 100%;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
export const SubInfo = styled.div`
    width: 100%;
    margin: 0 auto;
    font-size: 3rem;
    font-weight: 700;
`

export const ConInfo = styled.div`
    width: 95%;
    font-size: 1.6rem;
    margin: 1.5rem auto 3rem;
    word-break: keep-all;
`

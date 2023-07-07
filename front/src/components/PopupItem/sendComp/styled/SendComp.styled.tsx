import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 50rem; 
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SendCompWrapper = styled.div<ISizeProps>`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
    & > div:nth-child(2) {
        border-radius: 0.5rem;
    }
`

export const SendCompWrap = styled.div`
    padding: 0 2rem;
    margin-bottom: 1rem;
`

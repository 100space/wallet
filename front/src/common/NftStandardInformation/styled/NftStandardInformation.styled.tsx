import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"

export const CollectionBtn = styled.button<ISizeProps>`
    padding: 0.5rem 1.25rem;
    border: none;
    background-color: ${({ theme, mode }) => (mode && theme[mode].bg) || "#000"};
    border-radius: 0.75rem;
`

export const CollectionSubjectWrap = styled.div<ISizeProps>`
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;

    & > div:nth-child(1) {
        color: ${({ theme, mode}) => mode && theme[mode].text};
    }
    
    & > div:nth-child(2) {
        color: ${({ theme, mode}) => mode && theme[mode].text};
    }
`

export const CollectionOwnerWrap = styled.div<ISizeProps>`
    padding: 0 1rem;
    display: flex;
    align-items: center;

    & > div + div {
        margin-left: 1rem;
    }

    & > div:nth-child(1) {
        color: ${({ theme, mode}) => mode && theme[mode].text};
    }
    
    & > div:nth-child(2) {
        color: ${({ theme, mode}) => mode && theme[mode].textCoinName};
    }
`
export const CollectionSubject = styled.div<ISizeProps>`
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
`

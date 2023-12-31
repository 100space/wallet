import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const CategoryWrap = styled.div<ISizeProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    margin: 1rem 0;
    border-radius: 1rem;

    &:active,
    &:active > div {
        color: ${({ mode, theme }) => mode && theme[mode].textCoinSymbol};
        background-color: ${({ mode, theme }) => mode && theme[mode].categoryHover};
    }

    & > div {
        margin: 0 2rem;
        font-weight: 400;
        font-size: ${({ height }) => height};
        line-height: ${({ height }) => height};
        color: ${({ mode, theme }) => mode && theme[mode].text};
    }
`

export const CategorySubject = styled.div<ISizeProps>``


export const CategoryArrow = styled.div<ISizeProps>`
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    color: ${({ mode, theme }) => mode && theme[mode].buttonBg};
`

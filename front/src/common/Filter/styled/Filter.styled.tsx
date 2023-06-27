import { ISizeProps, ISelectedBtn } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const FilterWrap = styled.div<ISizeProps>`
    padding: 0.5rem 1rem;
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const FilterBtnWrap = styled.div<ISizeProps>`
    margin: 0.5rem 0;
`

export const FilterBtn = styled.button<ISelectedBtn>`
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ mode, theme, selected }) =>
        (selected && mode && theme[mode].text) || (mode && theme[mode].bgBtn)};
    font-weight: 600;
    font-size: 1.2rem;
    color: ${({ mode, theme, selected }) => (selected && mode && theme[mode].bgBtn) || (mode && theme[mode].text)};
    box-sizing: border-box;
`

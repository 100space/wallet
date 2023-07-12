import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const MainnetConTitleWrap = styled.div<ISizeProps>`
    color: ${({ mode, theme }) => mode && theme[mode].text};
    font-size: 2.5rem;
    font-weight: 800;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

export const MainnetConWrap = styled.div<ISizeProps>`
    width: 95%;
    height: 80%;
    margin: 0 auto;
    /* background: ${({ theme, mode }) => mode && theme[mode].settingBg}; */
    border-radius: 2.5rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
`

export const MainnetBtnWrap = styled.div`
    display: flex;
    justify-content: space-around;
`

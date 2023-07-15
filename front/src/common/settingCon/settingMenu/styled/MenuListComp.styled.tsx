import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const SettingMenuTitle = styled.div<ISizeProps>`
    font-size: 1rem;
    /* font-style: italic; */
    /* text-decoration-line: underline; */
`

export const SubWrap = styled.div<ISizeProps>`
    font-size: 2.5rem;
    font-weight: 520;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`

export const SetBtnWrap = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TeamInfoWrap = styled.div<ISizeProps>`
    font-size: 2.2rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`

import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const AlarmWrapper = styled.div<ISizeProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;

    & > div {
        margin: 1rem 0;
    }
`

export const AlarmWrap = styled.div<ISizeProps>`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    justify-content: space-evenly;
    /* background: ${({ theme, mode }) => mode && theme[mode].text}; */
`

export const AlarmDateWrap = styled.div<ISizeProps>`
    margin: 2rem 0;
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 3rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].alarmBg};
    color: ${({ theme, mode }) => mode && theme[mode].text};
    `

export const AlarmListWrap = styled.div<ISizeProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, mode }) => mode && theme[mode].alarmBg};
    color: ${({ theme, mode }) => mode && theme[mode].text};

    &:nth-child(2n) {
        background-color: ${({ theme, mode }) => mode && theme[mode].basicBg};
    }
`
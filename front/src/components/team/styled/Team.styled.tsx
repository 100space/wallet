import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const TeamWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: #232323; */
    & > div {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }
`

export const NickNameWrap = styled.div<ISizeProps>`
    font-size: 2rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`

export const ChopWrapper = styled.div`
    width: 90%;
    height: 25%; 
    display: flex;
    background-color: #3d3d3d;
    padding-top: 2rem;
    padding-left: 2rem;
    flex-direction: row;
`

export const ChopWrap = styled.div`
    width: 30%;
    height: 80%;
    background-color: #2d2d2d;
`
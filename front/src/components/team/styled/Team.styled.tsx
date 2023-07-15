import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"
import { InspectOptionsStylized } from "util"

export const TeamWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TeamWrap = styled.div<ISizeProps>`
    width: 100%;
    height: 22%;
    background: ${({ theme, mode }) => mode && theme[mode].teamBg};
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
`

export const MemberWrapper = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
`

export const MemberWrap = styled.div<ISizeProps>`
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
`

export const IconWrap = styled.div<ISizeProps>`
    width: 7rem;
    height: 4rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NameWrap = styled.div<ISizeProps>`
    color: white;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
`

export const ProfileWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfileImg = styled.img<ISizeProps>`
    width: 10rem;
    height: 10rem;
    margin-top: 1rem;
    border-radius: 10rem;
    background-color: #fafafa;
`

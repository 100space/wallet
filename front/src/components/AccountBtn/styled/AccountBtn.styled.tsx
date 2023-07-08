import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"


export const AccountBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    top: 3rem;
`
export const AccountBtnWrap = styled.div`
    width: 80%;
    height: 10rem;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`

export const AccountGetBtn = styled.div<ISizeProps>`
    width:15rem; 
    height:4rem; 
    border-radius: 4rem;
    border:none;
    font-size: 1.7rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].AccountGetBtnBg};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
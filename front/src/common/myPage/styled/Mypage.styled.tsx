import styled from "styled-components"
import myPage from "@img/myPage.jpg"
import { ISizeProps } from "@utils/interFace/styled.interface"

export const MypageWrapper = styled.div<ISizeProps>`
    width: 100%; 
    height: 100%;
    flex-direction: column;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: scroll;
    background: ${({ theme, mode }) => mode && theme[mode].profileBg};
    &::after{
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.3;
        content: "";
        overflow-y: scroll;
        flex-direction: column;
        position: absolute;
        overflow: hidden;
    }
    &::-webkit-scrollbar{
        display: none;
    }
`

export const MyProfile = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    top: 2.7rem;
`

export const MyNickName = styled.input`
    width: 100%;
    height: 13.5rem;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    color: #000000;
    position: relative;
    bottom: 5rem;
    border: none; 
    background-color: #ffffff2a;
    border: 0.1rem solid #cccccc6a;
`

export const TotalSupplyWrap = styled.div`
    width: 100%;
    height: 14rem;
    margin-bottom: 6px;
    bottom: 3rem;
    position: relative;
`

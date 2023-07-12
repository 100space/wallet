import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"

export const MypageWrapper = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    background: ${({ theme, mode }) => mode && theme[mode].bgInfo};
    padding: 0 1.5rem;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const MyProfileHeader = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "7.5%"};
    color: ${({ mode, theme }) => mode && theme[mode].text};
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    background-color: ${({ mode, theme }) => mode && theme[mode].basicBg};
`

export const MyProfileNickNameWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "7.5%"};
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    position: relative;
    bottom: 6rem;
    right: 1.5rem;

    & > button {
        font-weight: 700;
    }
`

export const MyProfileImageUpload = styled.form<ISizeProps>`
`

export const MyProfileNickName = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    color: ${({ mode, theme }) => mode && theme[mode].text};
    /* background-color: ${({ mode, theme }) => mode && theme[mode].basicBg}; */
`

export const MyProfileNickNameBtn = styled.button<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const MyProfile = styled.div<ISizeProps>`
    position: relative;
    margin-top: 1rem;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "55rem"};
    
    & > svg {
        font-size: 2.5rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        color: ${({ mode, theme }) => mode && theme[mode].text};
    }
`

export const MyProfileImg = styled.img<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    border-radius: inherit;
    object-fit: contain;
`

export const TotalSupplyWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "14rem"};
`

export const ProfileBtnWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "14rem"};
    display: flex;
    justify-content: space-between;

    & > button {
        font-weight: 700;
    }
`

export const MyProfileNickNameInput = styled.input<ISizeProps>`
    padding: 1rem 2rem;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    font-weight: 500;
    font-size: 1.6rem;
    border: none;
`

export const MyBtnWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    right: 2rem;
`

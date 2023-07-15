import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"

export const MypageWrapper = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
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
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "7.5%"};
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;

    & > button {
        font-weight: 700;
        margin-left: 2rem;
    }
`

export const MyProfileImageUpload = styled.form<ISizeProps>``

export const MyProfileNickName = styled.div<ISizeProps>`
    /* width: ${({ width }) => width || "100%"}; */
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ height }) => height || "100%"};
    color: ${({ mode, theme }) => mode && theme[mode].text};
    border-radius: 0.5rem;
`

export const MyProfileNickNameBtn = styled.button<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const MyProfile = styled.div<ISizeProps>`
    position: relative;
    width: ${({ width }) => width || "16rem"};
    height: ${({ height }) => height || "16rem"};
    border-radius: 50%;

    & > svg {
        font-size: 2.5rem;
        position: absolute;
        bottom: 0.02rem;
        right: 0.03rem;
        color: ${({ mode, theme }) => mode && theme[mode].text};
    }
`

export const MyProfileImg = styled.img<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    border-radius: inherit;
    object-fit: contain;
    background-color: #d9d9d9;
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
    background: transparent;
    font-weight: 500;
    font-size: 1.6rem;
    border-radius: 2rem;
    color: ${({ mode, theme }) => mode && theme[mode].text};
`

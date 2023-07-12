import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const GetWalletWrapper = styled.div<ISizeProps>`
    /* background-color: #2f2f2f; */
    width: 100%;
    /* height: fit-content; */
`

export const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 1.4rem;
    right: 1.5rem;
`

export const GetWalletSub = styled.div<ISizeProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #fff;
`

export const WalletInfoWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WalletInfo = styled.input<ISizeProps>`
    width: 90%;
    height: 5rem;
    border-radius: 1rem;
    color: ${({ theme, mode }) => mode && theme[mode].search};
    background-color: ${({ theme, mode }) => mode && theme[mode].walletBg};
    position: relative;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: 0.01rem solid #fff;
    font-size: 1.6rem;
    &::placeholder{
        color: ${({ theme, mode }) => mode && theme[mode].search}
    }
`

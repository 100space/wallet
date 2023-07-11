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

export const WalletInfo = styled.input`
    width: 90%;
    height: 5rem;
    border-radius: 1rem;
    border: none;
    background-color: #5e5e5e;
    position: relative;
    color: #fff;
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1.6rem;
`

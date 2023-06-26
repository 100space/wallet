import { queryByPlaceholderText } from "@testing-library/react"
import styled from "styled-components"

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #272727;
`

export const BtnWrap = styled.div`
    width: 95%;
    margin-top: 1rem;
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Btn = styled.button`
    width: 2rem;
    height: 2rem;
`

export const BottomSheetWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    overflow: hidden;
    background-color: #5f5f5f;
    transition: height 0.3s ease-in-out;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
`
export const PopUpItemWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 5rem 11rem;
    margin: 0 auto;
`

export const MyAccountWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 1.5rem;
    & > div {
        display: flex;
        justify-content: flex-end;
    }
`

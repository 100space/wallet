import { queryByPlaceholderText } from "@testing-library/react"
import styled from "styled-components"

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #bbd4ff;
`

export const BtnWrap = styled.div`
    width: 97%;
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Btn = styled.button`
    width: 20px;
    height: 20px;
    background-color: #ffec6e;
`

export const BottomSheetWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    overflow: hidden;
    background-color: #ffec6e;
    transition: height 0.3s ease-in-out;
    border-top-left-radius: 2.5px;
    border-top-right-radius: 2.5px;
`
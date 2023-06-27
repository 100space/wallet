import { queryByPlaceholderText } from "@testing-library/react"
import { IStateProps } from "@utils/interFace/styled.interface"
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

export const BottomSheetWrap = styled.div<IStateProps>`
    position: fixed;
    left: 0;
    width: 100%;
    bottom: ${({ popupstate }) => (popupstate === "true" ? "0%" : "-100%")};
    transition: all 0.5s ease-in-out;
    height: 50rem;
    overflow: hidden;
    background-color: #5f5f5f;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
`
export const PopUpItemWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 5rem 11rem;
    margin: 0 auto;
`

export const MyAccountWrapper = styled.div`
    width: 100%;
    height: 30%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 1.8rem;
    & > div {
        display: flex;
        justify-content: flex-end;
        margin-top: 3rem;
    }
`

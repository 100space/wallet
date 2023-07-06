import { FlexCenter } from "@styled/index"
import { queryByPlaceholderText } from "@testing-library/react"
import { IStateProps, IonClickProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #272727;
`

export const BtnWrap = styled.div`
    width: 95%;
    margin: 1rem 2rem 1rem 0;
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
    position: absolute;
    left: 0;
    width: 100%;
    bottom: ${({ popupstate }) => (popupstate === "true" ? "6rem" : "-100%")};
    height: ${({ popupstate }) => (popupstate === "true" ? "fit-content" : "0rem")};
    transition: all 0.5s cubic-bezier(0.15, 0.22, 0.12, 0.44);
    overflow: hidden;
    background-color: ${({ theme, mode}) => mode && theme[mode].popupBg};
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    ${FlexCenter}
`
export const PopupText = styled.div<IStateProps>`
    ${FlexCenter}
    margin-bottom: 5rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
    & > h1 {
        text-align: center;
        letter-spacing: 0.1rem;
        margin-bottom: 1rem;
        font-size: 2.4rem;
    }
    & > div {
        font-size: 1.6rem;
        padding: 0 6rem;
    }
`
export const PopUpItemWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem 3rem;
    margin: 0 auto;
`

export const MyAccountWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.8rem;
    & > div {
        display: flex;
        justify-content: flex-end;
        margin-top: 3rem;
    }
`

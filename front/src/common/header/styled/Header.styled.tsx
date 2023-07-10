import { ISelectedBtn, ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const ListHeaderWrap = styled.div<ISizeProps>`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    background: ${({ mode, theme }) => mode && theme[mode].coinBg};
    border-bottom: 0.1rem solid ${({ theme, mode }) => mode && theme[mode].text};

    & > div:nth-child(1) {
        width: 75%;
    }

    & > div:nth-child(2) {
        width: 25%;
    }

    & > div {
        text-align: center;
        font-size: 1.6rem;
        font-weight: 700;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`
export const AssetsListHeaderTab = styled.div<ISelectedBtn>`
    margin-right: 1rem;
    color: ${({ mode, theme, selected }) => (selected && "#47a247") || (mode && theme[mode].text)} !important;
    ${({ mode, theme, selected }) => (selected && "border-bottom: 0.2rem solid #47a247") || ""};
`

export const AssetsListHeaderWrap = styled.div<ISizeProps>`
    height: ${({ height }) => height || "100%"};
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

export const AssetsListHeaderTabs = styled.div<ISizeProps>`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div,
    svg {
        font-weight: 700;
        font-size: 1.6rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }

    & > div {
        margin-right: 1rem;
    }

    & > svg {
        font-size: 2rem;
    }
`

export const BackBtnHeaderWrap = styled.div<ISizeProps>`
    display: flex;
    align-items: center;
    position: absolute;
    padding: 0 2rem;
    top: 0;
    left: 0;
    width: ${({ width }) => width || "100vw"};
    height: ${({ height }) => height || "100%"};
    background-color: ${({ mode, theme }) => mode && theme[mode].basicBg};
`

export const BackBtnHeaderContent = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    position: absolute;
    left: 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: ${({ mode, theme }) => mode && theme[mode].text};
`
import { BorderBottomWhite } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const BlockRowWrap = styled.div<ISizeProps>`
    position:relative;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    ${BorderBottomWhite};
    transition: 0.2s all;

    & > svg {
        font-size: 2.5rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }

    & > svg:hover {
        color: ${({ theme, mode }) => mode && theme[mode].textCoinPrice};
    }

    & > svg:hover + span {
        opacity: 1;
    }

    &:nth-last-child(1) {
        border-bottom: 0rem;
    }
`

export const BlockImgWrap = styled.div<ISizeProps>`
    margin: 0 auto;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const BlockImg = styled.img<ISizeProps>`
    height: ${({ height }) => height || "100%"};
`

export const BlockInfoWrap = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    color: ${({ theme, mode }) => mode && theme[mode].text};

    & > div {
        font-size: 1.2rem;
        line-height: 200%;
    }
`

export const BlockNumber = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const BlockHash = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const BlockInformation = styled.span<ISizeProps>`
    display: block;
    padding: 0.75rem 1rem;
    opacity: 0;
    position: absolute;
    right: 3.5rem;
    font-size: 1.6rem;
    color: ${({ mode, theme }) => mode && theme[mode].text};
    background-color: ${({ mode, theme }) => mode && theme[mode].bgDescription};
    border-radius: 0.5rem;
`
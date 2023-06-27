import { ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const BlockListWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    background-color: darkgoldenrod;
`

export const BlockListHeaderWrap = styled.div<ISizeProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    & > div {
        display: flex;
        align-items: center;
        justify-content:center;
    }
`

export const BlockListHeaderContent = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    color: ${({ mode, theme}) => mode && theme[mode].text };
    font-size: 2rem;
    font-weight: 700;
    text-align: center;

    background-color: darkcyan;
`

export const BlockListHeaderBtn = styled.div<ISizeProps>`
    position: absolute;
    right: 0%;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`
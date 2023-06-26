import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const ListHeaderWrap = styled.div<ISizeProps>`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme, mode }) => mode && theme[mode].bgInfo};
    border-bottom: 1px solid ${({ theme, mode}) => mode && theme[mode].text };

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
        color: ${({theme, mode}) => mode && theme[mode].text};
    }
`
import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const CoinSlider = styled.div<ISizeProps>`
    padding: 1rem 0.5rem;
    display: flex;
    overflow: scroll;
    background-color: ${({ theme, mode }) => mode && theme[mode].basicBg};

    & > div {
        margin-left: 0.5rem;
    }
`
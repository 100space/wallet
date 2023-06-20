import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const CoinSlideWrap = styled.div<ISizeProps>`
    background-color: ${({ theme, mode }) => mode && theme[mode].basicBg};
    box-shadow: 0 0.5rem 0.5rem 1px rgba(0, 0, 0, 0.85);

    &, & > div {
        border-radius: 1rem;
    }
`
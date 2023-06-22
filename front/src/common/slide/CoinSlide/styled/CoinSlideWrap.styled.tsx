import { Shadow } from "@styled/index";
import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const CoinSlideWrap = styled.div<ISizeProps>`
    background-color: ${({ theme, mode }) => mode && theme[mode].basicBg};
    ${Shadow};

    &, & > div {
        border-radius: 1rem;
    }
`
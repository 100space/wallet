import { SizePropsStyled } from "@styled/index";
import { ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const BoardForm = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding: 0.5rem 1rem;
    background-color: ${({ mode, theme}) => mode && theme[mode].basicDeepBg};
    border-radius: 1rem;
    box-sizing: border-box;
`
import { SizePropsStyled, Shadow } from "@styled/index";
import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const NftCardWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding: 0.75rem;
    background-color: ${({ color }) => color};
    border-radius: 0.75rem;
    box-sizing: border-box;
    ${Shadow};
`
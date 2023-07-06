import { SizePropsStyled, Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NftCardWrap = styled.div<ISizeProps>`
    /* ${SizePropsStyled}; */
    width: 100%;
    width: ${(props) => props.width || "100%"};
    min-height: ${(props) => props.height || "100%"};
    padding: 0.75rem;
    background-color: ${({ color }) => color};
    border-radius: 0.75rem;
    box-sizing: border-box;
    ${Shadow};
`

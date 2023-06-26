import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const NFTCardListWrap = styled.div<ISizeProps>`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`
import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const CoinSlideSubject = styled.header<ISizeProps>`
    padding-left: 2rem;
    width: 100%;
    min-height: 3.6rem;
    color: ${({theme, mode}) => mode && theme[mode].text};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3.6rem;
    box-sizing: border-box;
    border-bottom: 1px solid #00000075;
`
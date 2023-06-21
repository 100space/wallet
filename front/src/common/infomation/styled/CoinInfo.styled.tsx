import { ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const CoinInfoWrap = styled.div<ISizeProps>`
    padding: 0.5rem;
    margin: 10rem 0;
    width: ${({ width }) => width || "100%"};
    min-height: 15rem;
    background-color: ${({ theme, mode }) => (mode && theme[mode].bgInfo)};
    border-radius: 1rem;
    box-shadow: 0 0.5rem 0rem 0px rgba(0, 0, 0, 0.85);
`
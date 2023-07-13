import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const TokenInfoWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%" };
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div + div {
        margin-top: 0.5rem;
    }
`
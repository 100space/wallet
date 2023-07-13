import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const NftTxListButton = styled.div<ISizeProps>`
    padding: 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        font-size: 1rem;
        font-weight: 700;
    }
`
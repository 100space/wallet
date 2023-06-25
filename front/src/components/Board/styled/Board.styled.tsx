import { SizePropsStyled } from "@styled/index";
import { ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const BoardForm = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    /* background-color: ${({ mode, theme}) => mode && theme[mode].basicDeepBg}; */
    background-color: #805353;
    border-radius: 1rem;
    box-sizing: border-box;
`

export const NftBoardContentRowWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme, mode}) => mode && theme[mode].text};
`

export const NftBoardContentSubject = styled.div<ISizeProps>``

export const NftBoardContentForm = styled.div<ISizeProps>`
    display: flex;
    justify-content: space-between;

    & > div + * {
        margin-left: 0.4rem;
    }
`

export const NftBoardContent = styled.div<ISizeProps>``
import { BorderBottomWhite, SizePropsStyled } from "@styled/index";
import { IHeader, ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const NftBoardWrap = styled.div<IHeader>`
    padding: 0 1.5rem;
    ${SizePropsStyled};
    ${({ header}) => header ? `${BorderBottomWhite};` : ``}
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div, button {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${({ theme, mode}) => mode && theme[mode].text};
    }
`

export const NftBoardHeaderSubject = styled.div<ISizeProps>`
    text-align: center;
    line-height: ${({ height }) => height || "100%" };
`

export const NftBoardButton = styled.button<ISizeProps>`
    cursor: pointer;
    padding: 0.4rem 1.5rem;
    border: none;
    border-radius: 0.4rem;
    background-color: ${({ theme, mode}) => mode && theme[mode].bg200};
    color: ${({ theme, mode}) => mode && theme[mode].text};

    /* &:hover {
        background-color: ${({ theme, mode }) => mode && theme[mode].buttonHover};
    } */
`

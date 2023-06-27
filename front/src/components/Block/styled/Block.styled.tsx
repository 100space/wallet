import { BorderBottomWhite } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const BlockRowWrap = styled.div<ISizeProps>`
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    ${BorderBottomWhite};

    & > svg {
        font-size: 2.5rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`

export const BlockImgWrap = styled.div<ISizeProps>`
    margin: 0 auto;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const BlockImg = styled.img<ISizeProps>`
    height: ${({ height }) => height || "100%"};
`

export const BlockInfoWrap = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    color: ${({ theme, mode }) => mode && theme[mode].text};

    & > div {
        font-size: 1.2rem;
        line-height: 200%;
    }
`

export const BlockNumber = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const BlockHash = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

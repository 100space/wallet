import { styled } from "styled-components"
import { ISizeProps, IStateProps } from "@utils/interFace/styled.interface"
import { BorderBottom, BorderBottomWhite, FlexCenter } from "@styled/index"

export const AccountRowWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "4.8rem"};
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ mode, theme }) => mode && theme[mode].bgBasic};
    box-sizing: border-box;
    margin: 0 auto;
    & > div,
    svg {
        font-size: 1.4rem;
        color: ${({ mode, theme }) => mode && theme[mode].text};
    }

    & > svg {
        cursor: pointer;
        font-size: 3rem;
        color: ${({ theme, mode }) => mode && theme[mode].point200};
    }
`

export const AccountRowImgWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    display: flex;
    justify-content: center;
    align-items: center;
    & > .AccountImg {
        height: 100%;
    }
`

export const AccountRowImg = styled.img`
    height: 70%;
    border-radius: 50%;
`

export const AccountRowAddress = styled.div<IStateProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    & > span {
        text-align: center;
    }
    /* ${FlexCenter} */
    /* text-align: end; */
`

export const AccountAssets = styled.div<IStateProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    ${FlexCenter}
`

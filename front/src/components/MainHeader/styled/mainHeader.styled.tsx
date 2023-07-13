import { FlexCenter, FlexSpaceBetween } from "@styled/index"
import { ISizeProps, TextProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const HeaderWrapper = styled.div`
    ${FlexSpaceBetween}
    width: 100%;
    height: 10%;
    padding: 1rem;
`
export const FunctionWrap = styled.div<ISizeProps>`
    /* position: relative; */
    ${FlexSpaceBetween}
    max-width: 14rem;
    width: 60%;
    height: 100%;
    & > svg {
        font-size: 3.3rem;
        margin: 0.3rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
    & > a > svg {
        font-size: 3.3rem;
        margin: 0.3rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`

export const HeaderSubJect = styled.div<TextProps>`
    width: 100%;
    font-size: ${(props) => props.fontSize || "inherit"};
    color: ${({ theme, mode }) => mode && theme[mode].text};
    font-weight: 800;
    text-align: center;
    ${FlexCenter}
    justify-content: flex-start;
    margin-left: 3rem;
    flex-direction: row;
    & > svg {
        cursor: pointer;
        margin-left: 1rem;
        color: ${({ theme, mode }) => mode && theme[mode].point200};
    }
`

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
    position: relative;
    ${FlexSpaceBetween}
    width: 20%;
    height: 100%;
    & > svg {
        font-size: 3.3rem;
        margin: 0.3rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`

export const HeaderSubJect = styled.div<TextProps>`
    width: fit-content;
    margin: 0 auto;
    /* position: absolute; */
    /* left: calc(50% - 15rem); */
    font-size: ${(props) => props.fontSize || "inherit"};
    color: ${({ theme, mode }) => mode && theme[mode].text};
    font-weight: 800;
    text-align: center;
    ${FlexCenter}
    flex-direction: row;
    & > svg {
        cursor: pointer;
        margin-left: 1rem;
        color: ${({ theme, mode }) => mode && theme[mode].point200};
    }
`

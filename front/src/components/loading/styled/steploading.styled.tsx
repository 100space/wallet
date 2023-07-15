import { FlexCenter } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { keyframes, styled } from "styled-components"

export const LoaderWrapper = styled.div`
    ${FlexCenter}
    width: 100%;
    height: 100%;
    align-items: center;
`
const rotate = keyframes`
  0% {
    width: 6.4rem;
    height: 6.4rem;
    transform: rotate(0deg);
  }
  50% {
    width: 3rem;
    height: 3rem;
    transform: rotate(180deg);
  }
  100% {
    width: 6.4rem;
    height: 6.4rem;
    transform: rotate(360deg);
  }
`

export const LoaderContainer = styled.div<ISizeProps>`
    width: 6.4rem;
    height: 6.4rem;
    position: relative;
    background-image: linear-gradient(${({ theme, mode }) => mode && theme[mode].text} 1.6rem, transparent 0),
        linear-gradient(#ff3d00 1.6rem, transparent 0), linear-gradient(#ff3d00 1.6rem, transparent 0),
        linear-gradient(${({ theme, mode }) => mode && theme[mode].text} 1.6rem, transparent 0);
    background-repeat: no-repeat;
    background-size: 1.6rem 1.6rem;
    background-position: left top, left bottom, right top, right bottom;
    animation: ${rotate} 1s linear infinite;
`

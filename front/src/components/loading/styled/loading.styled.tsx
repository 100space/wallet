import { ISizeProps } from "@utils/interFace/styled.interface"
import styled, { keyframes } from "styled-components"

const loaderAnimation = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`
export const LoaderWrap = styled.div`
    position: relative;
    width: 100%;
    top: 0;
`
export const Loader = styled.span<ISizeProps>`
    display: block;
    position: relative;
    height: 1.2rem;
    width: 100%;
    border: 0.1rem solid #fff;
    border-radius: 1rem;
    overflow: hidden;

    &::after {
        content: "";
        width: 40%;
        height: 100%;
        background: #bb2645;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${loaderAnimation} 1.5s linear infinite;
    }
`

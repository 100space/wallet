import { FlexCenter } from "@styled/index"
import { keyframes, styled } from "styled-components"

const loadingBounce = keyframes`
  0% { transform: scale(1, 0.7)}
  40% { transform: scale(0.8, 1.2)}
  60% { transform: scale(1, 1)}
  100% { bottom: 14rem }
`

const loadingStep = keyframes`
  0% {
    box-shadow: 0 1rem 0 rgba(0,0,0,0),
                0 1rem 0 #fff,
                -3.5rem 5rem 0 #fff,
                -7rem 9rem 0 #fff;
  }
  100% {
    box-shadow: 0 1rem 0 #fff,
                -3.5rem 5rem 0 #fff,
                -7rem 9rem 0 #fff,
                -7rem 9rem 0 rgba(0,0,0,0);
  }
`
export const LoaderWrapper = styled.div`
    ${FlexCenter}
    width: 100%;
    height: 100%;
`
export const LoaderContainer = styled.span`
    position: relative;
    width: 12rem;
    height: 9rem;
    margin: 0 auto;

    &:before {
        content: "";
        position: absolute;
        bottom: 2rem;
        left: 3.5rem;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        background: #ff3d00;
        animation: ${loadingBounce} 0.5s ease-in-out infinite alternate;
    }

    &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 0.7rem;
        width: 7rem;
        border-radius: 0.4rem;
        box-shadow: 0 0.5rem 0 #fff, -3.5rem 5rem 0 #fff, -7rem 9.5rem 0 #fff;
        animation: ${loadingStep} 1s ease-in-out infinite;
    }
`

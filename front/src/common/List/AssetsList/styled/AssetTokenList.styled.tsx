import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"
import { BorderBottomWhite } from "@styled/index"

export const AssetsListWrap = styled.div<ISizeProps>`
    height: fit-content;
    margin-top: 1rem;
    & > div {
        ${BorderBottomWhite};
    }

    & > div:nth-last-child(1) {
        border-bottom: none;
    }
`

export const AssetsNFTHeader = styled.div<ISizeProps>`
    padding: 1.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`

export const AssetsNFTCardsWrap = styled.div`
    padding: 1rem 0;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    justify-content: space-between;
    grid-template-columns: repeat(2, calc(50% - 1rem));
`

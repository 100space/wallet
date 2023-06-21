import { ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const CoinInfoHeaderWrap = styled.header<ISizeProps>`
    width: ${({ width }) => width || "100%"};
`

export const CoinInfoHeaderImgWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const CoinInfoHeaderImg = styled.img<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const CoinInfoHeaderName = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`

export const CoinInfoHedaerSymbol = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
`


export const CoinInforHeader = ({  }) => {
    return(
        <CoinInfoHeaderWrap>
            <CoinInfoHeaderImgWrap>
                <CoinInfoHeaderImg />
            </CoinInfoHeaderImgWrap>
            <CoinInfoHeaderName>

            </CoinInfoHeaderName>
            <CoinInfoHedaerSymbol>

            </CoinInfoHedaerSymbol>
        </CoinInfoHeaderWrap>
    )
}
import { ICoinPrice } from "@utils/interFace/coin.interface"
import { ITypeSize } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const CoinPriceContentWrap = styled.div<ITypeSize>`
    padding-right: 1rem;
    display: flex;
    justify-content: right;
    align-items: center;
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "4.8rem"};
    box-sizing: border-box;
`

export const CoinPriceCurrency = styled.div<ITypeSize>`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({color, theme}) => color || theme.textCoinPrice};
`

export const CoinPriceContent = styled.div<ITypeSize>`
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: right;
    line-height: ${({height}) => height || "4.8rem"};
    color: ${({color, theme}) => color || theme.textCoinPrice};
`

export const CoinPrice = ({width, price, currency}: ICoinPrice) => {
    return(
        <>
            <CoinPriceContentWrap width={width}>
                <CoinPriceContent>
                    {price ? price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : 0}
                </CoinPriceContent>
                <CoinPriceCurrency>
                    {currency}
                </CoinPriceCurrency>
            </CoinPriceContentWrap>
            
        </>
    )
}
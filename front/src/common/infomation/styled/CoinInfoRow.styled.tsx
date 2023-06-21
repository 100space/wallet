import { useGetMode } from "@hooks/useMode"
import { BorderBottom } from "@styled/index"
import { ICoinInfoRow, TCoinInfoRow } from "@utils/interFace/coin.interface"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinInfoRowWrap = styled.div<ISizeProps>`
    ${BorderBottom}
    display: flex;
    justify-content: space-between;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    & > div {
        font-size: 1.6rem;
    }
`

export const CoinInfoRowContentPriceWrap = styled.div<ISizeProps>`
    background-color: #fff;
`

export const CoinInfoRowContentPrice = styled.div<ISizeProps>`
    
`

export const CoinInfoRowContent = styled.div<ISizeProps>`
    background-color: #fff;
`

export const CoinInfoRow = (props : ICoinInfoRow) => {
    const [modeState, setChange] = useGetMode()

    const coinInfoRowList = (coindata: TCoinInfoRow) => {
        return coindata.map((v, index, array) => {
            return (
                // array.length === 1 ? <></> : (<CoinInfoRowContentPriceWrap mode={modeState.mode}>{v}</CoinInfoRowContentPriceWrap>))
                <CoinInfoRowContentPrice mode={modeState.mode}>{v}</CoinInfoRowContentPrice>
                )
        })
    }
    
    return(
        <CoinInfoRowWrap>
                {coinInfoRowList(props.content)}
        </CoinInfoRowWrap>
    )
}
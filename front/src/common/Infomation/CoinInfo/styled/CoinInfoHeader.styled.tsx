import { useGetMode } from "@hooks/useMode"
import { BorderBottom } from "@styled/index"
import { ICoinName } from "@utils/interFace/coin.interface"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinInfoHeaderWrap = styled.header<ISizeProps>`
    ${BorderBottom}
    padding: 2rem 1.5rem;
    display: flex;
    align-items: center;
    min-width: 36rem;
    width: ${({ width }) => width || "100%"};
    box-sizing: border-box;

    & > div + div {
        margin-left: 1rem;
    }
`

export const CoinInfoHeaderImgWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "2.8rem"};
    height: ${({ height }) => height || "2.8rem"};
`

export const CoinInfoHeaderImg = styled.img<ISizeProps>`
    height: ${({ height }) => height || "100%"};
    border: 0.2rem solid #fff;
`

export const CoinInfoHeaderName = styled.div<ISizeProps>`
    min-width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    color: ${({ theme, mode, color }) => (mode && theme[mode].text)};
    font-size: 1.6rem;
    font-weight: 500;
`

export const CoinInfoHedaerSymbol = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    color: ${({ theme, mode, color }) => (mode && theme[mode].textCoinName) || "#6f6f6f"};
    font-size: 1.6rem;
    font-weight: 500;
`

export const CoinInforHeader = ({ image, name, symbol }: ICoinName) => {
    const [modeState, setChange] = useGetMode()
    return (
        <CoinInfoHeaderWrap>
            <CoinInfoHeaderImgWrap>
                <CoinInfoHeaderImg src={image} />
            </CoinInfoHeaderImgWrap>
            <CoinInfoHeaderName mode={modeState.mode} width={"3.2rem"}>{name}</CoinInfoHeaderName>
            <CoinInfoHedaerSymbol width={"4.8rem"}>{symbol}</CoinInfoHedaerSymbol>
        </CoinInfoHeaderWrap>
    )
}

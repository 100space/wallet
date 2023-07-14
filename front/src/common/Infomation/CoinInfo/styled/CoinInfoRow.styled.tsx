import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { BorderBottom } from "@styled/index"
import { ICoinInfoRow, TCoinInfoRow } from "@utils/interFace/coin.interface"
import { IIndexProps, ISizeProps, ITypeSize } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinInfoRowWrap = styled.div<ISizeProps>`
    ${BorderBottom}
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    & > div {
        font-size: 1.6rem;
        font-weight: 500;
    }
    // 44rem
    & > div:nth-child(1) {
        width: 35%;
    }

    & > div:nth-child(2) {
        width: 65%;
        text-align: right;
    }
`

export const CoinInfoRowContent = styled.div<IIndexProps>`
    color: ${({ theme, mode, index, color, percent, price }) =>
        (percent && index === 1 && color) ||
        (index === 1 && mode && theme[mode].textCoinPrice) ||
        (mode && theme[mode].text)};
`

export const CoinInfoRow = (props: ICoinInfoRow) => {
    const [modeState, setChange] = useGetMode()

    const coinInfoRowList = (coindata: TCoinInfoRow) => {
        return coindata.map((v, idx, array) => {
            const color = typeof v === "number" && v >= 0 ? "#00d17f" : "#e84562"

            return (
                <CoinInfoRowContent
                    mode={modeState.mode}
                    color={color}
                    percent={props.percent}
                    price={props.price}
                    key={idx}
                    index={idx}
                >
                    {(props.price && idx === 1 ? "$ " : "") +
                        v.toString().replace(/\d(?=(\d{3})+\b)/g, "$&,") +
                        (props.percent && idx === 1 ? " %" : "")}
                </CoinInfoRowContent>
            )
        })
    }

    return <CoinInfoRowWrap mode={modeState.mode}>{coinInfoRowList(props.content)}</CoinInfoRowWrap>
}

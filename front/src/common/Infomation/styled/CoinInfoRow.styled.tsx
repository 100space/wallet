import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { BorderBottom } from "@styled/index"
import { ICoinInfoRow, TCoinInfoRow } from "@utils/interFace/coin.interface"
import { ISizeProps } from "@utils/interFace/styled.interface"
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
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
    // 44rem
    & > div:nth-child(1) {
        width: 27%;
    }

    & > div:nth-child(2) {
        width: 45%;
        text-align: right;
        color: ${({ theme, mode }) => mode && theme[mode].textCoinPrice};
    }

    & > div:nth-child(3) {
        max-width: 6rem;
        width: 7%;
        text-align: center;
        color: ${({ theme, mode }) => mode && theme[mode].textCoinPrice};
    }

    & > div:nth-child(4) {
        width: 7.5rem;
        text-align: right;
        color: ${({ color }) => color};
    }
`

export const CoinInfoRowContent = styled.div<ISizeProps>`
    color: ${({ color }) => color};
`

export const CoinInfoRow = (props: ICoinInfoRow) => {
    const [modeState, setChange] = useGetMode()

    const coinInfoRowList = (coindata: TCoinInfoRow) => {
        return coindata.map((v, index, array) => {
            // if (array.length === 2)
            const dataCheck = index === 3 && typeof v === "number"
            const plusCheck = dataCheck && v >= 0
            const minusCheck = dataCheck && v < 0
            const colorCheck = dataCheck && v >= 0 ? "#00d17f" : "#e84562"
            return (
                <CoinInfoRowContent mode={modeState.mode} color={colorCheck} key={index}>
                    {plusCheck ? <Icon icon={"mingcute:arrow-up-line"} color={colorCheck}></Icon> : <></>}
                    {minusCheck ? <Icon icon={"mingcute:arrow-up-line"} vFlip={true} color={colorCheck}></Icon> : <></>}
                    {v.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    {dataCheck ? "%" : ""}
                </CoinInfoRowContent>
            )
        })
    }

    return <CoinInfoRowWrap mode={modeState.mode}>{coinInfoRowList(props.content)}</CoinInfoRowWrap>
}

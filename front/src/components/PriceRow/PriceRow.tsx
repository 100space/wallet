import { useGetMode } from "@hooks/useMode"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const PriceRowWrap = styled.div<ISizeProps>`
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(1) {
        color: ${({ theme, mode }) => mode && theme[mode].textCoinName};
    }

    & > div:nth-child(2) {
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }

    & > div {
        font-weight: 600;
    }
`

export const PriceRowContent = styled.div<ISizeProps>`
    font-size: 1rem;
`

export const PriceRow = (props: { text: (string | number) [] }) => {
    const [modeState, setModeState] = useGetMode()

    return(
        <PriceRowWrap height={"2.4rem"} mode={modeState.mode}>
            <PriceRowContent>{props.text[0]}</PriceRowContent>
            <PriceRowContent>{props.text[1]} {props.text[2]}</PriceRowContent>
        </PriceRowWrap>
    )
}
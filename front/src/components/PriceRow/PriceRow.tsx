import { useGetMode } from "@hooks/useMode"
import { PriceRowWrap, PriceRowContent } from "./styled"

export const PriceRow = (props: { text: (string | number) [] }) => {
    const [modeState, setModeState] = useGetMode()

    return(
        <PriceRowWrap height={"2.4rem"} mode={modeState.mode}>
            <PriceRowContent>{props.text[0]}</PriceRowContent>
            <PriceRowContent>{props.text[1]} {props.text[2]}</PriceRowContent>
        </PriceRowWrap>
    )
}
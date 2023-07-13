import { useGetMode } from "@hooks/useMode"
import { TxBtnWrap, TxBtnContent } from "./styled"

export const TxBtn = () => {
    const [modeState, setModeState] = useGetMode()
    return (
        <TxBtnWrap mode={modeState.mode}>
            <TxBtnContent mode={modeState.mode}>구매하기</TxBtnContent>
            <TxBtnContent mode={modeState.mode}>뒤로가기</TxBtnContent>
        </TxBtnWrap>
    )
}

import { BlockListHeaderWrap, BlockListHeaderContent, BlockListHeaderBtn } from "@common/List/TxList/styled"
import { CloseBtn } from "@components/CloseBtn"
import { useGetMode } from "@hooks/useMode"

export const BlockListHeader = () => {
    const [modeState, setModeState] = useGetMode()

    return (
        <BlockListHeaderWrap height={"6rem"} mode={modeState.mode}>
            <BlockListHeaderContent width={"100%"} mode={modeState.mode}>
                {"블록 정보"}
            </BlockListHeaderContent>
            <BlockListHeaderBtn width={"20%"} mode={modeState.mode}>
                <CloseBtn />
            </BlockListHeaderBtn>
        </BlockListHeaderWrap>
    )
}

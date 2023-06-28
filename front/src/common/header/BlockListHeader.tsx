import { BlockListHeaderWrap, BlockListHeaderContent, BlockListHeaderBtn } from "@common/List/TxList/styled"
import { CloseBtn } from "@components/CloseBtn"
import { useGetMode } from "@hooks/useMode"
import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"

export const BlockListHeader = () => {
    const { mode } = useRecoilValue(ModeState)

    return (
        <BlockListHeaderWrap height={"6rem"} mode={mode}>
            <BlockListHeaderContent width={"100%"} mode={mode}>
                {"블록 정보"}
            </BlockListHeaderContent>
            <BlockListHeaderBtn width={"20%"} mode={mode}>
                <CloseBtn />
            </BlockListHeaderBtn>
        </BlockListHeaderWrap>
    )
}

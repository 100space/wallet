import { ListHeaderWrap } from "./styled/Header.styled"
import { useGetMode } from "@hooks/useMode"

export const ListHeader = () => {
    const [modeState, setModeState] = useGetMode()

    return (
        <ListHeaderWrap mode={modeState.mode}>
            <div>컬렉션 목록</div>
            <div>최저 판매가</div>
        </ListHeaderWrap>
    )
}
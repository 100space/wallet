import { ListHeaderWrap } from "./styled/Header.styled"
import { useGetMode } from "@hooks/useMode"

export const ListHeader = () => {
    const [modeState, setModeState] = useGetMode()
    
    return (
        <ListHeaderWrap mode={modeState.mode}>
            <div>제목</div>
            <div>판매가</div>
        </ListHeaderWrap>
    )
}
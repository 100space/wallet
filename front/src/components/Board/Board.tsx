import { useGetMode } from "@hooks/useMode"
import { BoardForm } from "./styled/Board.styled"

export const Board = () => {
    const [modeState, setModeState] = useGetMode()
    return(
        <BoardForm mode={modeState.mode}>
        </BoardForm>
    )
}
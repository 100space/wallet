import { useGetMode } from "@hooks/useMode"
import { BoardForm } from "./styled/Board.styled"

export const Board = ({ children }: any) => {
    const [modeState, setModeState] = useGetMode()
    return(
        <BoardForm mode={modeState.mode}>
            {children}
        </BoardForm>
    )
}
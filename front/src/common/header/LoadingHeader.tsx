import { useGetMode } from "@hooks/useMode"
import { BackBtnHeaderWrap, BackBtnHeaderContent } from "./styled/Header.styled"

export const LoadingHeader = () => {
    const [modeState] = useGetMode()

    return (
        <BackBtnHeaderWrap mode={modeState.mode} height={'10%'}>
            <BackBtnHeaderContent mode={modeState.mode} >
                {"Loading"}
            </BackBtnHeaderContent>
        </BackBtnHeaderWrap>
    )
}
import { ArrowHamburger } from "@components/Hamburger"
import { useGetMode } from "@hooks/useMode"
import { IClickHandler } from "@utils/interFace/core"
import { BackBtnHeaderWrap, BackBtnHeaderContent } from "./styled/Header.styled"

interface IBackBtnHeader extends IClickHandler {
    content: string
}

export const BackBtnHeader = ({ onClick, content }: IBackBtnHeader) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <BackBtnHeaderWrap mode={modeState.mode} height={'10%'}>
            <ArrowHamburger onClick={onClick} />
            <BackBtnHeaderContent mode={modeState.mode}>
                {content}
            </BackBtnHeaderContent>
        </BackBtnHeaderWrap>
    )
}
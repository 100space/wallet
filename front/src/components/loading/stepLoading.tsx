import { useRecoilValue } from "recoil"
import { LoaderContainer, LoaderWrapper } from "./styled/steploading.styled"
import { ModeState } from "@utils/localStorage"

const StepLoader = () => {
    const { mode } = useRecoilValue(ModeState)
    return (
        <LoaderWrapper>
            <LoaderContainer mode={mode} />
        </LoaderWrapper>
    )
}

export default StepLoader

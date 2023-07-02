import { useRecoilValue } from "recoil"
import { Loader, LoaderWrap } from "./styled/loading.styled"
import { InitMode } from "@utils/localStorage"

export const LoadingBar = () => {
    const { mode } = useRecoilValue(InitMode)
    return (
        <LoaderWrap>
            <Loader mode={mode} />
        </LoaderWrap>
    )
}

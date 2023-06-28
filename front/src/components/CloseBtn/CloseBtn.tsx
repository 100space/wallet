import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"
import { BtnWrap } from "./styled/CloseBtn.styled"
import { Icon } from "@iconify/react"

export const CloseBtn = ({ onClick }: { onClick?: () => void }) => {
    const { mode } = useRecoilValue(ModeState)
    return (
        <>
            <BtnWrap mode={mode} onClick={onClick}>
                <Icon icon="mi:close" mode={mode} />
            </BtnWrap>
        </>
    )
}

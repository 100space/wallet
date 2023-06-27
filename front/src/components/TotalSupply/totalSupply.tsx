import { TextComp } from "@common/initStep/styled"
import { TotalWrap } from "./styled"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { Alert } from "@components/Alert/alert"
import CopyToClipboard from "react-copy-to-clipboard"
import { KRW } from "@components/Nft/NftCard"

export const TotalSupply = () => {
    const { mode } = useRecoilValue(ModeState)
    return (
        <TotalWrap mode={mode}>
            <TextComp fontSize="3rem" position="between" width="100%">
                총 자산
                <CopyToClipboard
                    text={"11231231223123"}
                    onCopy={() => Alert.fire({ icon: "info", title: "클립보드에 복사되었습니다." })}
                >
                    <span className="account">11231231223123</span>
                </CopyToClipboard>
            </TextComp>
            <TextComp fontSize="2.4rem" position="between" width="100%">
                <span>KRW</span>
                <span>{KRW(23123210)}</span>
            </TextComp>
        </TotalWrap>
    )
}

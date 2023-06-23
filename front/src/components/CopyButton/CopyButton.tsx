import { CopyToClipboard } from "react-copy-to-clipboard"
import { Icon } from "@iconify/react"
import { CopyFunctionWrap, CopyFunctionIcon, CopyFunctionContent } from "./styled/CopyButton.styled"
import { useGetMode } from "@hooks/useMode"
import { Alert } from "@components/Alert/alert"

export interface ICopyButton {
    copyContent: string
}

export const CopyButton = ({ copyContent }: ICopyButton) => {
    const [modeState, setChange] = useGetMode()

    return (
        <CopyToClipboard
            text={copyContent}
            onCopy={() => Alert.fire({ icon: "info", title: "클립보드에 복사되었습니다." })}
        >
            <CopyFunctionWrap width="85%" color="white" mode={modeState.mode} height="10%">
                <CopyFunctionIcon width="7.5%">
                    <Icon icon="mingcute:copy-fill"></Icon>
                </CopyFunctionIcon>
                <CopyFunctionContent width="92.5%">클립보드에 복사하기</CopyFunctionContent>
            </CopyFunctionWrap>
        </CopyToClipboard>
    )
}

import { CopyToClipboard } from "react-copy-to-clipboard"
import { Icon } from "@iconify/react"
import { CopyFunctionWrap, CopyFunctionIcon, CopyFunctionContent } from "./styled/CopyButton.styled"

interface ICopyButton {
    copyContent: string
}

export const CopyButton = ({ copyContent }: ICopyButton) => {
    return (
        <CopyToClipboard text={copyContent} onCopy={() => alert("클립보드에 복사되었습니다.")}>
            <CopyFunctionWrap width="85%" color="white">
                <CopyFunctionIcon width="7.5%">
                    <Icon icon="mingcute:copy-fill"></Icon>
                </CopyFunctionIcon>
                <CopyFunctionContent width="92.5%">
                    클립보드에 복사하기
                </CopyFunctionContent>
            </CopyFunctionWrap>
        </CopyToClipboard>
    )
}
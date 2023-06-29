import { Mnemonic } from "@components/Mnemonic"
import { PrivateExportWrapper, PrivateExportWrap } from "./styled"

export const PrivateExport = () => {

    return(
        <>
            <PrivateExportWrapper>
                <PrivateExportWrap>⚠️ 경고 <br/>아무에게도 비공개키를 보여주면 안됩니다.</PrivateExportWrap>
                <Mnemonic mnemonic={[]}/>
            </PrivateExportWrapper>

        </>
    )
}
import { CopyButton } from "@components/CopyButton"
import QRCodeGenerator from "@components/PopupItem/QR/QrCode"
import { MyAccountWrapper } from "@components/bottomSheet/styled"
import { ModeState, MyAccounts } from "@utils/localStorage"
import { useRecoilValue } from "recoil"

export const QrComp = () => {
    const myAccount = useRecoilValue(MyAccounts)
    const { mode } = useRecoilValue(ModeState)
    return (
        <>
            <QRCodeGenerator />
            <MyAccountWrapper mode={mode}>
                {myAccount.address}
                <CopyButton copyContent={myAccount.address} />
            </MyAccountWrapper>
        </>
    )
}

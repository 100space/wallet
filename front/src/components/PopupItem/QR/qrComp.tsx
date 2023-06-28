import { CopyButton } from "@components/CopyButton"
import QRCodeGenerator from "@components/PopupItem/QR/QrCode"
import { MyAccountWrapper } from "@components/bottomSheet/styled"

export const QrComp = () => {
    return (
        <>
            <QRCodeGenerator />
            <MyAccountWrapper>
                0x4922349j3j4k5jo35m
                <CopyButton copyContent={"1"} />
            </MyAccountWrapper>
        </>
    )
}

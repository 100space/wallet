import QRCode from "qrcode.react"
import { QrWrapper, QrWrap } from "@components/PopupItem/QR/styled/index"

const QRCodeGenerator = () => {
    const path = "http://localhost:3001/"

    return (
        <QrWrapper>
            <QrWrap>
                <QRCode value={path} />
            </QrWrap>
        </QrWrapper>
    )
}

export default QRCodeGenerator

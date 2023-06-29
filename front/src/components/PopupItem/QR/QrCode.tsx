import QRCode from "qrcode.react"
import { QrWrapper, QrWrap } from "@components/PopupItem/QR/styled/index"

const QRCodeGenerator = () => {
    const path = "http://localhost:3001/"

    return (
        <QrWrapper>
            <QrWrap>
                <QRCode value={"0xdaeb6abd5f9e50b5a47c8af20fba7bf54667107b"} />
            </QrWrap>
        </QrWrapper>
    )
}

export default QRCodeGenerator

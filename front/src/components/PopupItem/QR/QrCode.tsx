import QRCode from "qrcode.react"
import { QrWrapper, QrWrap } from "@components/PopupItem/QR/styled/index"
import { useRecoilValue } from "recoil"
import { MyAccounts } from "@utils/localStorage"

const QRCodeGenerator = () => {
    const path = "http://localhost:3001/"
    const { address } = useRecoilValue(MyAccounts)
    return (
        <QrWrapper>
            <QrWrap>
                <QRCode value={address} />
            </QrWrap>
        </QrWrapper>
    )
}

export default QRCodeGenerator

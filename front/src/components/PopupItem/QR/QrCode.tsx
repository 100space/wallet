import QRCode from "qrcode.react"
import { QrWrapper, QrWrap } from "@components/PopupItem/QR/styled/index"
import { useRecoilValue } from "recoil"
import { MyAccounts, MyInfo, MyNetwork } from "@utils/localStorage"

const QRCodeGenerator = () => {
    const path = "http://localhost:3001/"
    const { address } = useRecoilValue(MyAccounts)
    const network = useRecoilValue(MyNetwork)
    const myInfo = useRecoilValue(MyInfo)
    const { chainId } = myInfo[network as keyof typeof myInfo].networks

    return (
        <QrWrapper>
            <QrWrap>
                <QRCode value={`ethereum:${address}@${chainId}`} />
            </QrWrap>
        </QrWrapper>
    )
}

export default QRCodeGenerator

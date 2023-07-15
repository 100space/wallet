import { Alert, ConfirmAlert } from "@components/Alert/alert"
import { QrScanner } from "@yudiel/react-qr-scanner"
import Swal from "sweetalert2"
import { BlurWrap, QrScan } from "./styled"
import { Button } from "@components/Button"
import { useRecoilState, useRecoilValue } from "recoil"
import { IsPopUp, ModeState, MyNetwork, ScanOpen } from "@utils/localStorage"

export const Scanner = () => {
    const { mode } = useRecoilValue(ModeState)
    const [scanOpen, setScanOpen] = useRecoilState(ScanOpen)
    const [isOpen, setOpen] = useRecoilState(IsPopUp)
    const [network, setNetwork] = useRecoilState(MyNetwork)
    return (
        <>
            <BlurWrap />
            <QrScan>
                {scanOpen && (
                    <QrScanner
                        scanDelay={500}
                        viewFinderBorder={50}
                        constraints={{ facingMode: "user" }}
                        onDecode={(result) => {
                            try {
                                console.log(result)
                                const [address, chainId] = result.split("ethereum:")[1].split("@")
                                const QrChainId =
                                    chainId === "137"
                                        ? "polygon"
                                        : chainId === "80001"
                                        ? "mumbai"
                                        : chainId === "421613"
                                        ? "arbitrum"
                                        : "mumbai"

                                if (typeof address === "string" && address.length === 42) {
                                    if (network !== QrChainId) setNetwork(QrChainId)
                                    ConfirmAlert(address, setScanOpen, setOpen)
                                }
                            } catch (error: any) {
                                throw new Error("지원하지 않는 QRcode입니다.")
                            }
                        }}
                        onError={(error) => {
                            Swal.fire(`${error.message}`, "유효하지 않은 계정의 QRcode입니다.", "warning")
                            // 오류 처리 로직
                        }}
                    ></QrScanner>
                )}
                <Button
                    width={"60%"}
                    height={"4rem"}
                    mode={mode}
                    margin="2rem auto 0"
                    content="끝내기"
                    fontSize="1.6rem"
                    onClick={() => setScanOpen(false)}
                ></Button>
            </QrScan>
        </>
    )
}

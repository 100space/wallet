import { ConfirmAlert } from "@components/Alert/alert"
import { QrScanner } from "@yudiel/react-qr-scanner"
import Swal from "sweetalert2"
import { BlurWrap, QrScan } from "./styled"
import { Button } from "@components/Button"
import { useRecoilState, useRecoilValue } from "recoil"
import { IsPopUp, ModeState, ScanOpen } from "@utils/localStorage"

export const Scanner = () => {
    const { mode } = useRecoilValue(ModeState)
    const [scanOpen, setScanOpen] = useRecoilState(ScanOpen)
    const [isOpen, setOpen] = useRecoilState(IsPopUp)

    return (
        <>
            <BlurWrap />
            <QrScan>
                {scanOpen && (
                    <QrScanner
                        scanDelay={500}
                        viewFinderBorder={50}
                        constraints={{ facingMode: "environment" }}
                        onDecode={(result) => {
                            if (typeof result === "string" && result.length === 42) {
                                ConfirmAlert(result, setScanOpen, setOpen)
                            } else {
                                throw new Error(result) // 예외 발생
                            }
                        }}
                        onError={(error) => {
                            Swal.fire(`${error}`, "유효하지 않은 계정의 QRcode입니다.", "warning")
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

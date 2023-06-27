import { CloseBtn } from "@components/CloseBtn"
import { Wrap, Btn, BottomSheetWrap, BtnWrap, MyAccountWrapper } from "@components/bottomSheet/styled/index"
import { useState } from "react"
import QRCodeGenerator from "@components/QR/QrCode"
import { CopyButton } from "@components/CopyButton"
import { SendComp } from "@components/PopupItem"
export const bringList = [
    {subject: "계약주소(CA)", content:"토큰 계약주소"},
    {subject: "토큰 기호(Symbol)", content:"토큰 기호"},
    {subject: "토큰 소수점(Decimal)", content:"토큰 소수점"},
]

export const sendList = [
    {subject: "보낼 계좌", content:"보낼 계좌를 입력해주세요"},
    {subject: "금액", content:"금액을 입력해주세요"},
]

export const PopupComp = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSheet = () => {
        setIsOpen(!isOpen)
    }
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Btn onClick={toggleSheet}>Toggle Sheet</Btn>
            {isOpen ? (
                <BottomSheetWrap>
                    <BtnWrap>
                        <CloseBtn onClick={handleClick} />
                    </BtnWrap>
                    <SendComp inputArray={sendList}/>
                </BottomSheetWrap>
            ) : (
                <></>
            )}
        </>
    )
}

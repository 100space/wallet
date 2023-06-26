import { CloseBtn } from "@components/CloseBtn"
import { Wrap, Btn, BottomSheetWrap, BtnWrap, MyAccountWrapper } from "@components/bottomSheet/styled/index"
import { useState } from "react"
import QRCodeGenerator from "@components/QR/QrCode"
import { CopyButton } from "@components/CopyButton"

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
                </BottomSheetWrap>
            ) : (
                <></>
            )}
        </>
    )
}

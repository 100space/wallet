import { CloseBtn } from "@components/CloseBtn"
import { Btn, BottomSheetWrap, BtnWrap, MyAccountWrapper, PopUpItemWrap } from "@components/bottomSheet/styled/index"
import { useState } from "react"
import { PopUpItem } from "./popupItem"

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
            {/* <Btn onClick={toggleSheet}>Toggle Sheet</Btn> */}
            {isOpen ? (
                <BottomSheetWrap>
                    <BtnWrap>
                        <CloseBtn onClick={handleClick} />
                    </BtnWrap>
                    <PopUpItemWrap>
                        <PopUpItem />
                    </PopUpItemWrap>
                </BottomSheetWrap>
            ) : (
                <></>
            )}
        </>
    )
}

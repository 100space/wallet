import { CloseBtn } from "@components/CloseBtn"
import { Btn, BottomSheetWrap, BtnWrap, MyAccountWrapper, PopUpItemWrap } from "@components/bottomSheet/styled/index"
import { useState } from "react"
import { PopUpItem } from "./popupItem"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { IsPopUp } from "@utils/localStorage"

export const PopupComp = () => {
    // const [isOpen, setIsOpen] = useRecoilState(IsPopUp)
    const isOpen = useRecoilValue(IsPopUp)
    const setIsOpen = useSetRecoilState(IsPopUp)

    const toggleSheet = () => {
        setIsOpen(!isOpen)
    }
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Btn onClick={toggleSheet}>Toggle Sheet</Btn>
            <BottomSheetWrap popupstate={isOpen.toString()}>
                <BtnWrap>
                    <CloseBtn onClick={handleClick} />
                </BtnWrap>
                <PopUpItemWrap>
                    <PopUpItem />
                </PopUpItemWrap>
            </BottomSheetWrap>
        </>
    )
}

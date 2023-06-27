import { CloseBtn } from "@components/CloseBtn"
import { Btn, BottomSheetWrap, BtnWrap, MyAccountWrapper, PopUpItemWrap } from "@components/bottomSheet/styled/index"
import { useState } from "react"
import QRCodeGenerator from "@components/QR/QrCode"
import { CopyButton } from "@components/CopyButton"
import { SendComp } from "@components/PopupItem"
import { MainInput } from "@components/PopupItem/mainInput"
export const bringList = [
    {subject: "계약주소(CA)", content:"토큰 계약주소"},
    {subject: "토큰 기호(Symbol)", content:"토큰 기호"},
    {subject: "토큰 소수점(Decimal)", content:"토큰 소수점"},
]
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
<!--             {isOpen ? (
                <BottomSheetWrap>
                    <BtnWrap>
                        <CloseBtn onClick={handleClick} />
                    </BtnWrap>
                    <MainInput inputArray={bringList}/>
                </BottomSheetWrap>
            ) : (
                <></>
            )} -->
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

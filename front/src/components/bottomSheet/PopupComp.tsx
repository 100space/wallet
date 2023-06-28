import { CloseBtn } from "@components/CloseBtn"
import {
    Btn,
    BottomSheetWrap,
    BtnWrap,
    MyAccountWrapper,
    PopUpItemWrap,
    PopupText,
} from "@components/bottomSheet/styled/index"
import { useState } from "react"
import QRCodeGenerator from "@components/PopupItem/QR/QrCode"
import { CopyButton } from "@components/CopyButton"
import { SendComp } from "@components/PopupItem"
import { PopUpItem } from "./popupItem"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { IsPopUp, ModeState } from "@utils/localStorage"
import { usePopup } from "@hooks/usePopup"
import { IMatched } from "@utils/interFace/core"

export const bringList = [
    { subject: "계약주소(CA)", content: "토큰 계약주소" },
    { subject: "토큰 기호(Symbol)", content: "토큰 기호" },
    { subject: "토큰 소수점(Decimal)", content: "토큰 소수점" },
]

export const sendList = [
    { subject: "보낼 계좌", content: "보낼 계좌를 입력해주세요" },
    { subject: "금액", content: "금액을 입력해주세요" },
]

export const PopupComp = () => {
    const [{ isOpen, contents }, setPopup] = usePopup()
    const { mode } = useRecoilValue(ModeState)
    const handleClick = () => {
        setPopup("")
    }

    const matchText: IMatched = {
        "토큰 가져오기": { text: "토큰의 계약주소와 토큰의 정보를 이용하여 토큰을 가져올 수 있습니다." },
        송금하기: { text: "송금할 계좌와 금액을 입력해주세요." },
        "NFT 가져오기": { text: "토큰의 계약주소와 토큰의 아이디를 입력하여 토큰을 가져올 수 있습니다." },
        입금받기: { text: "QRcode 또는 계정을 이용해서 입금할 수 있습니다." },
    }

    return (
        <>
            {/* <Btn onClick={toggleSheet}>Toggle Sheet</Btn> */}
            {/* {isOpen ? (
                <BottomSheetWrap>
                    <BtnWrap>
                        <CloseBtn onClick={handleClick} />
                    </BtnWrap>
                    <SendComp inputArray={sendList}/>
                </BottomSheetWrap>
            ) : (
                <></>
            )} */}
            <BottomSheetWrap popupstate={isOpen.toString()}>
                <BtnWrap>
                    <CloseBtn onClick={handleClick} />
                </BtnWrap>
                <PopupText mode={mode}>
                    <h1>{matchText[contents]?.content || contents}</h1>
                    <div className="PopupText">{matchText[contents]?.text}</div>
                </PopupText>
                <PopUpItemWrap>
                    <PopUpItem />
                </PopUpItemWrap>
            </BottomSheetWrap>
        </>
    )
}

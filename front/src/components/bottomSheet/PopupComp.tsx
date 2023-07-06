import { CloseBtn } from "@components/CloseBtn"
import { BottomSheetWrap, BtnWrap, PopUpItemWrap, PopupText } from "@components/bottomSheet/styled/index"
import { PopUpItem } from "./popupItem"
import { useRecoilValue } from "recoil"
import { ModeState } from "@utils/localStorage"
import { usePopup } from "@hooks/usePopup"
import { IMatched } from "@utils/interFace/core"
import { useGetMode } from "@hooks/useMode"

export const PopupComp = () => {
    const [modeState, setChange] = useGetMode()
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
        트랜잭션: { text: "현재 선택된 계정의 거래정보를 가져옵니다." },
        "My Account": { text: "사용할 계정을 선택해주세요." },
    }

    return (
        <>
            <BottomSheetWrap mode={modeState.mode} popupstate={isOpen.toString()}>
                <BtnWrap>
                    <CloseBtn onClick={handleClick} />
                </BtnWrap>
                <PopupText mode={mode}>
                    <h1>{matchText[contents]?.content !== undefined || contents}</h1>
                    <div className="PopupText">{matchText[contents]?.text}</div>
                </PopupText>
                <PopUpItemWrap>
                    <PopUpItem />
                </PopUpItemWrap>
            </BottomSheetWrap>
        </>
    )
}

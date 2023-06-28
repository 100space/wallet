import { usePopup } from "@hooks/usePopup"
import { PopupWrap, PopupWrappers } from "./styled"

export interface IPopList {
    content: string
}

export const sendBringList = [{ content: "송금하기" }, { content: "입금받기" }, { content: "NFT 생성하기" }]

export const checkTransactonList = [{ content: "송금하기" }, { content: "입금받기" }, { content: "트랜잭션" }]

export const PopupBtn = () => {
    const [{ isOpen, contents }, setPopup] = usePopup()
    const renderMainPopupBtn = (popArray: IPopList[]) => {
        return popArray.map((v, index, array) => {
            return (
                <PopupWrap key={index} onClick={() => setPopup(v.content)}>
                    {v.content}
                </PopupWrap>
            )
        })
    }

    return (
        <>
            <PopupWrappers>{renderMainPopupBtn(checkTransactonList)}</PopupWrappers>
        </>
    )
}

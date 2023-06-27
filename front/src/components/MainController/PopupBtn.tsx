import { PopupWrap, PopupWrappers } from "./styled"

export interface IPopList {
    content: string
}

export const sendBringList = [{ content: "송금하기" }, { content: "받기" }, { content: "NFT 생성하기" }]

export const checkTransactonList = [{ content: "송금하기" }, { content: "받기" }, { content: "트랜잭션" }]

export const PopupBtn = () => {
    const renderMainPopupBtn = (popArray: IPopList[]) => {
        return popArray.map((v, index, array) => {
            return <PopupWrap key={index}>{v.content}</PopupWrap>
        })
    }

    return (
        <>
            <PopupWrappers>{renderMainPopupBtn(sendBringList)}</PopupWrappers>
        </>
    )
}

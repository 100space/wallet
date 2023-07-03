import { sendBringList } from "@components/MainController"
import { SendComp, mainList } from "@components/PopupItem/sendComp/index"
import { MainnetBtnWrap, MainnetConTitleWrap, MainnetConWrap } from "./styled/MainnetCon.styled"
import { Btn } from "@components/Button"

export const MainnetCon = () => {
    const handleButtonClick = (e: MouseEvent) => {}
    return(
        <>
            <MainnetConTitleWrap>
                Ethereum
            </MainnetConTitleWrap>
            <MainnetConWrap>
                <SendComp inputArray={mainList} settings={true}/>
                <MainnetBtnWrap>
                    <Btn backgroundcolor="" fontSize="1.5rem" width="10rem" height="4rem" margin="" mode="" onClick={()=>handleButtonClick} profile={"true"}>승인</Btn>
                    <Btn backgroundcolor="" fontSize="1.5rem" width="10rem" height="4rem" margin="" mode="" onClick={()=>handleButtonClick} profile={"true"}>취소</Btn>
                </MainnetBtnWrap>
            </MainnetConWrap>
        </>
    )
}
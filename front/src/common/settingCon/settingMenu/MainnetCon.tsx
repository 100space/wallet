import { sendBringList } from "@components/MainController"
import { SendComp, mainList } from "@components/PopupItem/sendComp/index"
import { MainnetBtnWrap, MainnetConTitleWrap, MainnetConWrap } from "./styled/MainnetCon.styled"
import { Btn } from "@components/Button"
import { useGetMode } from "@hooks/useMode"

export const MainnetCon = () => {
    const [modeState, setChange] = useGetMode()
    const handleButtonClick = (e: MouseEvent) => {}
    return(
        <>
            <MainnetConTitleWrap mode={modeState.mode}>
                Ethereum
            </MainnetConTitleWrap>
            <MainnetConWrap mode={modeState.mode}>
                <SendComp inputArray={mainList} settings={true}/>
                <MainnetBtnWrap>
                    <Btn backgroundcolor="#00d12d" color="white" fontSize="1.5rem" width="10rem" height="4rem" margin="" mode="" onClick={()=>handleButtonClick} profile={"true"}>승인</Btn>
                    <Btn backgroundcolor="white" color="#455bff" fontSize="1.5rem" width="10rem" height="4rem" margin="" mode="" onClick={()=>handleButtonClick} profile={"true"}>취소</Btn>
                </MainnetBtnWrap>
            </MainnetConWrap>
        </>
    )
}
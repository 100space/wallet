import { InputComp } from "@components/input"
import { InputList } from "@utils/interFace/core"
import path from "path"
import { SendCompWrapper, SendCompWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"
import { IsPopUp, MyInfo, MyAccounts, MyNetwork } from "@utils/localStorage"
import { useRecoilState, useRecoilValue } from "recoil"
import { useLocation } from "react-router-dom"

export const InputListComp = (inputArray: InputList[]) => {
    const [modeState, setModeState] = useGetMode()
    const [isPopup, setIsPopup] = useRecoilState(IsPopUp)
    const [myInfo, setMyInfo] = useRecoilState(MyInfo)
    const myAccounts = useRecoilValue(MyAccounts)
    const network = useRecoilValue(MyNetwork)
    const path = useLocation().pathname.split("/")[3].toLowerCase()
    console.log(inputArray)
    return inputArray.map((v, index) => (
        <SendCompWrapper key={index} mode={modeState.mode}>
            <SendCompWrap>{v.subject}</SendCompWrap>
            {v.address && v.className === "contractAddress" ? (
                <InputComp
                    value={v.address}
                    placeholder={v.content}
                    height={4}
                    type=""
                    fontSize={1.4}
                    className={v.className}
                />
            ) : v.value ? (
                <InputComp
                    value={
                        myInfo[path]
                            ? v.value === "1"
                                ? path
                                : v.value === "2"
                                ? myInfo[path].networks.rpc
                                : v.value === "3"
                                ? myInfo[path].networks.chainId
                                : myInfo[path].networks.symbol
                            : ""
                    }
                    height={4}
                    type=""
                    fontSize={1.4}
                    className={v.className}
                />
            ) : (
                <InputComp placeholder={v.content} height={4} type="" fontSize={1.4} className={v.className} />
            )}
        </SendCompWrapper>
    ))
}

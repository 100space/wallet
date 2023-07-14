import { IsPopUp, ModeState, MyAccounts, MyInfo, MyNFT, MyNetwork } from "@utils/localStorage"
import { useRecoilState, useRecoilTransactionObserver_UNSTABLE, useRecoilValue, useResetRecoilState } from "recoil"
import { ethers } from "ethers"
import { useNFTin } from "@hooks/useNFTin"
import requestServer from "@utils/axios/requestServer"
import { Alert } from "@components/Alert/alert"
import { InputList } from "@utils/interFace/core"
import { useLocation, useNavigate } from "react-router"
import { MainnetBtnWrap } from "@common/settingCon/settingMenu/styled/MainnetCon.styled"
import { Btn, Button } from "@components/Button"
import { InputComp } from "@components/input"
import { SendCompWrapper, SendCompWrap } from "./styled"
import { useQuery } from "@tanstack/react-query"

export const sendList = [
    { subject: "보낼 계좌", content: "보낼 계좌를 입력해주세요", className: "contractAddress" },
    { subject: "금액", content: "금액을 입력해주세요", className: "amount" },
]

export const tokenBringList = [
    { subject: "계약주소(CA)", content: "토큰 계약주소", className: "contractAddress" },
    { subject: "토큰 기호(Symbol)", content: "토큰 기호", className: "symbol" },
    { subject: "토큰 소수점(Decimal)", content: "토큰 소수점", className: "decimal" },
]

export const nftGetList = [
    { subject: "계약주소(CA)", content: "0x...", className: "contractAddress" },
    { subject: "토큰 아이디(Token ID)", content: "토큰 아이디", className: "tokenId" },
]

export const mainList = [
    { subject: "네트워크 이름", content: "", value: "1" },
    { subject: "네트워크 URL", content: "", value: "2" },
    { subject: "체인 ID", content: "", value: "3" },
    { subject: "통화 기호", content: "", value: "4" },
]

export const SendComp = (props: {
    inputArray: InputList[]
    BtnContent?: string
    className?: string
    address?: string
    settings?: boolean
    handler?: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
    const { mode } = useRecoilValue(ModeState)
    const popupReset = useResetRecoilState(IsPopUp)
    const [isPopup, setIsPopup] = useRecoilState(IsPopUp)
    const [myInfo, setMyInfo] = useRecoilState(MyInfo)
    const myAccounts = useRecoilValue(MyAccounts)
    const network = useRecoilValue(MyNetwork)
    const nftin = useNFTin()
    const navigator = useNavigate()
    const [myNft, setMyNft] = useRecoilState(MyNFT)
    const pathname = useLocation().pathname
    const path = pathname.includes("network") ? pathname.split("/")[3].toLowerCase() : null

    const handlerWeb3Fn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((e.currentTarget as HTMLElement).className === "getToken") {
            const ca = (e.currentTarget[0] as HTMLFormElement).value
            const symbol = (e.currentTarget[1] as HTMLFormElement).value
            const decimal = (e.currentTarget[2] as HTMLFormElement).value

            try {
                const response = await requestServer.post("token", {
                    ca,
                    symbol,
                    decimal,
                })

                if (
                    myInfo[network as keyof typeof myInfo].tokens.filter((v: any) => v.ca === response.data.ca)
                        .length === 0
                ) {
                    console.log("add")
                    const updatedMyInfo = {
                        ...myInfo,
                        [network]: {
                            ...myInfo[network as keyof typeof myInfo],
                            tokens: [
                                ...myInfo[network as keyof typeof myInfo].tokens,
                                {
                                    ca: response.data.ca,
                                    symbol: response.data.symbol,
                                    decimal: response.data.decimal,
                                },
                            ],
                        },
                    }
                    setMyInfo({ ...updatedMyInfo })
                    return popupReset()
                }
                return Alert.fire({ icon: "warning", title: "이미 추가된 토큰입니다." })
            } catch (err) {
                return Alert.fire({ icon: "warning", title: "올바른 값으로 다시 입력해주세요." })
            }
        } else if ((e.currentTarget as HTMLElement).className === "sendTransaction") {
            try {
                const valueInEther = (e.currentTarget[1] as HTMLFormElement).value
                if ((e.currentTarget[0] as HTMLFormElement).value.length !== 42) {
                    console.log((e.currentTarget[0] as HTMLFormElement).value.length)
                    return Alert.fire({ title: "계좌를 확인해주세요.", icon: "error" })
                }
                const valueInWei = ethers.parseUnits(valueInEther, "ether").toString()
                const tx = {
                    from: myAccounts.address,
                    to: (e.currentTarget[0] as HTMLFormElement).value,
                    value: valueInWei,
                }
                // 0xB5D30137972494dC3EC4Ae9C6955D760B70A01c9
                console.log(tx)
                const result = await nftin.sendTransaction(tx)
                console.log(result)
                setIsPopup({ ...isPopup, isOpen: false, contents: "" })
            } catch (error: any) {
                if (error.message.includes("insufficient funds")) {
                    Alert.fire({ title: "잔액이 부족합니다.", icon: "error" })
                }
            }
        } else if ((e.currentTarget as HTMLElement).className === "getNft") {
            const eoa = myAccounts.address
            const ca = (e.currentTarget[0] as HTMLFormElement).value
            const tokenId = (e.currentTarget[1] as HTMLFormElement).value

            try {
                const { data } = await requestServer.put("market", { eoa, ca, tokenId })
                setMyNft([...myNft, data])
                return popupReset()
            } catch (error: any) {
                if (error.response.data.message) {
                    Alert.fire({ title: `${error.response.data.message}`, icon: "warning" })
                } else {
                    Alert.fire({ title: "올바른 CA를 입력하거나 Token ID를 입력하세요.", icon: "question" })
                }
            }
        } else if ((e.currentTarget as HTMLElement).className === "sendTransaction") {
            try {
                const valueInEther = (e.currentTarget[1] as HTMLFormElement).value
                if ((e.currentTarget[0] as HTMLFormElement).value.length !== 42) {
                    console.log((e.currentTarget[0] as HTMLFormElement).value.length)
                    return Alert.fire({ title: "계좌를 확인해주세요.", icon: "error" })
                }
                const valueInWei = ethers.parseUnits(valueInEther, "ether").toString()
                const tx = {
                    from: myAccounts.address,
                    to: (e.currentTarget[0] as HTMLFormElement).value,
                    value: valueInWei,
                }
                // 0xB5D30137972494dC3EC4Ae9C6955D760B70A01c9
                console.log(tx)
                const result = await nftin.sendTransaction(tx)
                console.log(result)
                setIsPopup({ ...isPopup, isOpen: false, contents: "" })
            } catch (error: any) {
                if (error.message.includes("insufficient funds")) {
                    Alert.fire({ title: "잔액이 부족합니다.", icon: "error" })
                }
                console.log(error)
            }
        }
    }

    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => (
            <SendCompWrapper key={index} mode={mode}>
                <SendCompWrap>{v.subject}</SendCompWrap>
                {v.className === "contractAddress" ? (
                    <InputComp
                        value={props.address}
                        placeholder={v.content}
                        height={4}
                        type=""
                        fontSize={1.4}
                        className={v.className}
                    />
                ) : v.value && path ? (
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

    return (
        <form onSubmit={props.handler ? props.handler : handlerWeb3Fn} className={props.className}>
            {inputList(props.inputArray)}
            {props.settings ? (
                <>
                    <MainnetBtnWrap>
                        <Btn
                            backgroundcolor="#feda4a"
                            color="#2d2d2d"
                            fontSize="1.5rem"
                            width="10rem"
                            height="4rem"
                            margin=""
                            mode=""
                            profile={"true"}
                        >
                            승인
                        </Btn>
                        <Btn
                            backgroundcolor="#878787"
                            color="#ffffff"
                            fontSize="1.5rem"
                            width="10rem"
                            height="4rem"
                            margin=""
                            mode=""
                            onClick={() => navigator("/setting")}
                            profile={"true"}
                        >
                            취소
                        </Btn>
                    </MainnetBtnWrap>
                </>
            ) : (
                <Button
                    width={"70%"}
                    height={"5rem"}
                    mode={mode}
                    margin="3rem auto 0 "
                    content={props.BtnContent}
                    fontSize="1.6rem"
                    color="#ffffff"
                ></Button>
            )}
        </form>
    )
}

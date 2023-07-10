import { Button } from "@components/Button"
import { InputComp } from "@components/input"
import { ModeState, MyAccounts } from "@utils/localStorage"
import { useRecoilValue } from "recoil"
import { SendCompWrapper, SendCompWrap } from "@components/PopupItem/sendComp/styled/index"
import { useGetMode } from "@hooks/useMode"
import NFTin from "@core/index"
import { ethers } from "ethers"
import { useNFTin } from "@hooks/useNFTin"

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
    { subject: "네트워크 이름", content: "" },
    { subject: "네트워크 URL", content: "" },
    { subject: "체인 ID", content: "" },
    { subject: "통화 기호", content: "" },
]

export interface InputList {
    subject: string
    content: string
    tokenTitle?: string
    nftTitle?: string
    className?: string
    address?: string
}

export const SendComp = (props: {
    inputArray: InputList[]
    BtnContent?: string
    className?: string
    address?: string
    settings?: boolean
}) => {
    const { mode } = useRecoilValue(ModeState)
    const [modeState, setModeState] = useGetMode()
    const myAccounts = useRecoilValue(MyAccounts)
    const nftin = useNFTin()

    const handlerWeb3Fn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((e.target as HTMLFormElement).className === "getToken") {
            console.log(11)
        }
        if ((e.target as HTMLFormElement).className === "sendTransaction") {
            console.log("handlerWeb3Fn")
            console.log((e.currentTarget[0] as HTMLFormElement).value)
            console.log((e.currentTarget[1] as HTMLFormElement).value)
            const valueInEther = (e.currentTarget[1] as HTMLFormElement).value
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
        }
        if ((e.target as HTMLFormElement).className === "getToken") {
        }
    }

    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => (
            <SendCompWrapper key={index} mode={modeState.mode}>
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
                ) : (
                    <InputComp placeholder={v.content} height={4} type="" fontSize={1.4} className={v.className} />
                )}
            </SendCompWrapper>
        ))
    }

    return (
        <form onSubmit={handlerWeb3Fn} className={props.className}>
            {inputList(props.inputArray)}
            {props.settings ? (
                <></>
            ) : (
                <Button
                    width={"70%"}
                    height={"5rem"}
                    mode={mode}
                    margin="3rem auto 0 "
                    content={props.BtnContent}
                    fontSize="1.6rem"
                ></Button>
            )}
        </form>
    )
}

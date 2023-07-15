import { SendComp, mainList } from "@components/PopupItem/sendComp/index"
import { MainnetConTitleWrap, MainnetConWrap } from "./styled/MainnetCon.styled"
import { useGetMode } from "@hooks/useMode"
import { useLocation, useNavigate } from "react-router"
import { useRecoilState, useResetRecoilState } from "recoil"
import { MyInfo, MyNetwork, MyTokens } from "@utils/localStorage"
import { Alert } from "@components/Alert/alert"

export const MainnetCon = () => {
    const [modeState, setChange] = useGetMode()
    const [network, setNetwork] = useRecoilState(MyNetwork)
    const [info, setInfo] = useRecoilState(MyInfo)
    const myTokenReset = useResetRecoilState(MyTokens)
    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname.split("/")
    const currentPath = path[path.length - 1]
    const apiKey = process.env.REACT_APP_INFURA_KEY
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const network = (e.currentTarget[0] as HTMLInputElement).value
        const rpc = (e.currentTarget[1] as HTMLInputElement).value
        const chainId = (e.currentTarget[2] as HTMLInputElement).value
        const symbol = (e.currentTarget[3] as HTMLInputElement).value
        if (network === null || rpc === null || chainId === null || symbol === null) {
            Alert.fire({ text: "빈칸을 채워주세요", icon: "error" })
        } else {
            if (
                typeof network !== "string" ||
                typeof rpc !== "string" ||
                typeof chainId !== "string" ||
                typeof symbol !== "string"
            ) {
                Alert.fire({ text: "잘못된 형식입니다", icon: "error" })
            }
            const newInfo = {
                [network]: {
                    networks: { rpc, chainId, symbol },
                },
            }
            if (!info.hasOwnProperty(network)) {
                setInfo({ ...info, ...newInfo })
            }
            const cookie = network === "arbitrum" ? "arbitrum_goerli" : network
            document.cookie = `network=${cookie}`
            setNetwork(network)
            myTokenReset()
            navigate("/")
        }
    }
    return (
        <>
            <MainnetConWrap mode={modeState.mode}>
                <MainnetConTitleWrap mode={modeState.mode}>{currentPath}</MainnetConTitleWrap>
                <SendComp inputArray={mainList} settings={true} handler={handlerSubmit} />
            </MainnetConWrap>
        </>
    )
}

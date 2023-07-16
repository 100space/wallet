import { useGetMode } from "@hooks/useMode"
import { TxBtnWrap, TxBtnContent } from "./styled"
import { useLocation, useNavigate } from "react-router"
import { MouseEvent, useEffect, useState } from "react"
import { Contract, ethers } from "ethers"
import { MARKET_ABI } from "@abi/MARKET.ABI"
import { useNFTin } from "@hooks/useNFTin"
import requestServer from "@utils/axios/requestServer"
import axios from "axios"
import { Alert, PurchaseAlert } from "@components/Alert/alert"
import { IsPopUp, MyTokens, ScanOpen } from "@utils/localStorage"
import { useRecoilState, useRecoilValue } from "recoil"
import { sign } from "crypto"

interface ITxBtn {
    marketId: number
    myAddress: string
    price: number
    to: string
    ca: string
    krw: string
    tokenId: string
    name: string
}

export const TxBtn = ({ marketId, myAddress, price, to, ca, krw, tokenId, name }: ITxBtn) => {
    const nftIn = useNFTin()
    const [scanOpen, setScanOpen] = useRecoilState(ScanOpen)
    const [isOpen, setOpen] = useRecoilState(IsPopUp)
    const assets = useRecoilValue(MyTokens)
    const [modeState, setModeState] = useGetMode()
    const [market, setMarket] = useState<Contract>()
    const [disable, setDisable] = useState(false)
    const [nftInfomation, setNftInfomation] = useState({ ca: "", tokenId: "" })
    const [parsedPrice, setParsedPrice] = useState("0")
    const [isClick, setIsClick] = useState(false)
    const [isMine, setIsMine] = useState(myAddress === to)
    const [signer, setSigner] = useState<ethers.Wallet>()
    const navigate = useNavigate()
    const location = useLocation()

    const getBackIndex = (pathName: string) => {
        const pathArr = pathName.split("/")
        return { ca: pathArr[pathArr.length - 2], tokenId: pathArr[pathArr.length - 1] }
    }

    const handleClickToBack = (e: MouseEvent) => {
        navigate(-1)
    }

    const convertToWei = (number: number, decimals: number) => {
        const wei = ethers.parseUnits(number.toString(), decimals)
        return wei.toString()
    }

    const handleBuy = async () => {
        try {
            if (!market) return
            if (!signer) return
            if (disable) {
                setIsClick(false)
                return Alert.fire("잔액이 부족합니다.", "", "warning")
            }
            if (myAddress === to) {
                setIsClick(false)
                return Alert.fire("이미 소유하고 있습니다.", "", "warning")
            }

            await PurchaseAlert(name)

            setIsClick(true)

            const buyNFT = await market.buyNft(marketId, {
                from: myAddress,
                value: parsedPrice,
                gasLimit: 800000,
            })

            await Alert.fire("구매를 진행중입니다.", "", "warning")

            const receipt = await buyNFT.wait()

            await Alert.fire("구매 접수가 완료되었습니다.", "", "warning")

            if (!receipt) {
                setIsClick(false)
                return Alert.fire("구매에 실패했습니다.", "", "warning")
            }
            await axios.post("https://nest-deploy-c764d61cc1b8.herokuapp.com/event/transfer", {
                id: marketId,
                from: myAddress,
                to,
                NFTaddress: ca,
                tokenId: Number(tokenId),
                price,
                krwPrice: krw,
                event: "transfer",
            })
        } catch (e) {
            alert(e)
        }
    }

    const createSigner = () => {
        const sign = nftIn.wallet.connect(nftIn.provider)
        setSigner(sign)
    }

    useEffect(() => {
        if (market) return
        if (nftIn === null) return
        if (assets[0].assets[0].amount <= price) {
            setDisable(true)
        }
        createSigner()
        if (process.env.REACT_APP_MARKET_CA && signer) {
            const contract = new Contract(process.env.REACT_APP_MARKET_CA, MARKET_ABI, signer)
            if (!contract) return
            setMarket(contract)
        }
    }, [nftIn, market, signer])

    useEffect(() => {
        setNftInfomation(getBackIndex(location.pathname))
        setParsedPrice(convertToWei(price * 10 ** 18, 0))
    }, [])

    return (
        <TxBtnWrap mode={modeState.mode}>
            {isMine ? (
                <TxBtnContent mode={modeState.mode} disabled={true}>
                    {" "}
                    소유중{" "}
                </TxBtnContent>
            ) : isClick ? (
                <TxBtnContent mode={modeState.mode} disabled={true}>
                    구매접수 중
                </TxBtnContent>
            ) : (
                <TxBtnContent mode={modeState.mode} onClick={handleBuy}>
                    구매하기
                </TxBtnContent>
            )}
            <TxBtnContent mode={modeState.mode} onClick={handleClickToBack}>
                뒤로가기
            </TxBtnContent>
        </TxBtnWrap>
    )
}

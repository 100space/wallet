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
import { IsPopUp, ScanOpen } from "@utils/localStorage"
import { useRecoilState } from "recoil"
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
    const [modeState, setModeState] = useGetMode()
    const [market, setMarket] = useState<Contract>()
    const [nftInfomation, setNftInfomation] = useState({ ca: "", tokenId: "" })
    const [parsedPrice, setParsedPrice] = useState("0")
    const [signer, setSigner] = useState<ethers.Wallet>()
    const navigate = useNavigate()
    const location = useLocation()

    const getBackIndex = (pathName: string) => {
        const pathArr = pathName.split("/")
        return { ca: pathArr[pathArr.length - 2], tokenId: pathArr[pathArr.length - 1] }
    }

    const handleClickToBack = (e: MouseEvent) => {
        navigate(`/market/collection/${getBackIndex(location.pathname).ca}`)
    }

    const convertToWei = (number: number, decimals: number) => {
        const wei = ethers.parseUnits(number.toString(), decimals)
        return wei.toString()
    }

    const handleBuy = async () => {
        console.log(signer)
        console.log(market)
        try {
            if (!market) return
            if (!signer) return
            if (myAddress === to) return Alert.fire("이미 소유하고 있습니다.", "", "warning")
            PurchaseAlert(name, setScanOpen, setOpen)

            const buyNFT = await market.buyNft(marketId, {
                from: myAddress,
                value: parsedPrice,
                gasLimit: 800000,
            })

            const receipt = await buyNFT.wait()

            if (!receipt) return Alert.fire("구매에 실패했습니다.", "", "warning")
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
            <TxBtnContent mode={modeState.mode} onClick={handleBuy}>
                구매하기
            </TxBtnContent>
            <TxBtnContent mode={modeState.mode} onClick={handleClickToBack}>
                뒤로가기
            </TxBtnContent>
        </TxBtnWrap>
    )
}
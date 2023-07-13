import { useGetMode } from "@hooks/useMode"
import { TxBtnWrap, TxBtnContent } from "./styled"
import { useLocation, useNavigate } from "react-router"
import { MouseEvent, useEffect, useState } from "react"
import { Contract, ethers } from "ethers"
import { MARKET_ABI } from "@abi/MARKET.ABI"
import { useNFTin } from "@hooks/useNFTin"
import requestServer from "@utils/axios/requestServer"

interface ITxBtn {
    marketId: number
    myAddress: string
    price: number
}

export const TxBtn = ({ marketId, myAddress, price }: ITxBtn) => {
    const nftIn = useNFTin()
    const [modeState, setModeState] = useGetMode()
    const [market, setMarket] = useState<Contract>()
    const [isLoading, setIsLoading] = useState(false)
    const [nftInfomation, setNftInfomation] = useState({ ca: "", tokenId: "" })
    const [parsedPrice, setParsedPrice] = useState('0')
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
        setIsLoading(true);
        try {
            if (!market) return
            const buyNFT = await market.buyNft(marketId, {
                from: myAddress,
                value: parsedPrice,
                gasLimit: 800000,
            });
            // const receipt = await buyNFT.wait();
            // console.log(receipt)
            // if (receipt.logs) {
            //     const decodedData = decodeTransfer(receipt, token);
            // const response = await requestServer.post("event/transfer", {
            //     ...decodedData,
            // });
            // if (response.statusText === "Created") {
            // setIsOpenModal(false);
            // setIsBuyLoading(false);
            // toast.success("NFT transaction was successful!");
            // updateCollection(token.NFTaddress);
            // }
            // }
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        if (nftIn === null) return
        if (process.env.REACT_APP_MARKET_CA) {
            const contract = new Contract(process.env.REACT_APP_MARKET_CA, MARKET_ABI, nftIn.provider);
            setMarket(contract)
        }
    }, [nftIn])

    useEffect(() => {
        setNftInfomation(getBackIndex(location.pathname))
        setParsedPrice(convertToWei(price * 10 ** 18, 0))
    }, [])

    return (
        <TxBtnWrap mode={modeState.mode}>
            <TxBtnContent mode={modeState.mode} onClick={handleBuy}>구매하기</TxBtnContent>
            <TxBtnContent mode={modeState.mode} onClick={handleClickToBack}>뒤로가기</TxBtnContent>
        </TxBtnWrap>
    )
}
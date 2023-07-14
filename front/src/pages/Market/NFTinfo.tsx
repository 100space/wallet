import { NftInfomation, NftStandardInformation } from "@common/Infomation"
import { NftTxList } from "@common/List"
import { ErrorPage } from "@common/error"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { LoadingHeader } from "@common/header/LoadingHeader"
import { TxBtn } from "@components/Button"
import { LoadingBar } from "@components/loading"
import { ImageForm, PlatWrap } from "@styled/index"
import requestServer from "@utils/axios/requestServer"
import { INFTInfomationByMarket } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { ModeState, MyAccounts, NFTMarketId } from "@utils/localStorage"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"

export const NFTInfoPage = () => {
    const { marketId } = useRecoilValue(NFTMarketId)
    const { mode } = useRecoilValue(ModeState)
    const location = useLocation()
    const navigate = useNavigate()
    const { address: eoa } = useRecoilValue(MyAccounts)
    const [transaction, setTransaction] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: [] as ITransaction[],
    })
    const [nft, setNft] = useState({
        isLoading: false,
        isError: null as null | unknown,
        data: {} as INFTInfomationByMarket | null,
    })

    const getNFT = async ({ ca, tokenId, tokenStandard }: { ca: string; tokenId: string; tokenStandard: string }) => {
        setNft((prev) => ({ isLoading: true, isError: null, data: null }))
        try {
            try {
                const response = await requestServer.post("/market/info", { ca, tokenId })
                setNft((prev) => ({ isLoading: false, isError: null, data: response.data }))
            } catch (e) {
                if (tokenStandard === "ERC721") {
                    const { data } = await requestServer.post("/market/erc721", { eoa, ca, tokenId })
                    const result = {
                        ca,
                        supply: data.supply,
                        creator: "unknown",
                        symbol: data.symbol,
                        blockchain: {
                            name: "polygon",
                            image: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?}1624446912",
                        },
                        tokenId,
                        tokenStandard,
                        collectionName: "unknown",
                        nftName: data.name,
                        description: data.description,
                        image: data.image,
                        owner: "unknown",
                        isTrade: "false",
                        price: { currency: "MATIC", price: 0 },
                        fee: { currency: "MATIC", price: 0 },
                    }
                    setNft((prev) => ({ isLoading: false, isError: null, data: result as INFTInfomationByMarket }))
                }
                if (tokenStandard === "ERC1155") {
                    const { data } = await requestServer.post("/market/erc1155", { ca, tokenId })
                    const result = {
                        ca,
                        supply: 0,
                        creator: "unknown",
                        symbol: "unknown",
                        blockchain: {
                            name: "polygon",
                            image: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?}1624446912",
                        },
                        tokenId,
                        tokenStandard,
                        collectionName: "unknown",
                        nftName: data.name,
                        description: data.description,
                        image: data.image,
                        owner: "unknown",
                        isTrade: "false",
                        price: { currency: "MATIC", price: 0 },
                        fee: { currency: "MATIC", price: 0 },
                    }
                    setNft((prev) => ({ isLoading: false, isError: null, data: result as INFTInfomationByMarket }))
                }
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setNft({ isLoading: false, isError: e.response, data: {} as INFTInfomationByMarket })
            }
        }
    }

    const getTranscation = async ({ ca, tokenId }: { ca: string; tokenId: string }) => {
        setTransaction((prev) => ({ isLoading: false, isError: null, data: [] }))
        try {
            const response = await requestServer.post("/market/transaction", { ca, tokenId })
            console.log(response.data)
            setTransaction((prev) => ({ isLoading: false, isError: null, data: response.data as ITransaction[] }))
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setTransaction({ isLoading: false, isError: e.response, data: {} as ITransaction[] })
            }
        }
    }

    const createPath = (pathname: string) => {
        console.log(pathname)
        const url = pathname.split("/")
        return { ca: url[url.length - 3], tokenId: url[url.length - 2], tokenStandard: url[url.length - 1] }
    }

    const clickBackBtnHandler = (e: MouseEvent) => {
        // navigate(`/market/collection/${createPath(location.pathname).ca}`)
        navigate(-1)
    }

    useEffect(() => {
        getNFT(createPath(location.pathname))
        const path = createPath(location.pathname)
        getTranscation({ ca: path.ca, tokenId: path.tokenId })
    }, [])

    if (nft.isLoading || !nft.data || transaction.isLoading)
        return (
            <>
                <LoadingHeader />
                <LoadingBar />
            </>
        )
    if (nft.isError || transaction.isError) return <ErrorPage code={404} message={""} />
    return (
        <>
            <BackBtnHeader content={nft.data.nftName} onClick={clickBackBtnHandler} />
            <PlatWrap mode={mode}>
                <ImageForm height={"75vw"} src={nft.data.image} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftStandardInformation
                    sellPrice={nft.data.price}
                    fee={nft.data.fee}
                    nftName={nft.data.nftName}
                    tokenId={nft.data.tokenId}
                    like={0}
                    creator={nft.data.creator}
                    owner={nft.data.owner}
                    collectionName={nft.data.collectionName}
                />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftInfomation
                    owner={{ subject: "소유자", value: nft.data.owner }}
                    blockchain={{ subject: "블록체인", value: nft.data.blockchain }}
                    ca={{ subject: "계약주소", value: nft.data.ca }}
                    tokenId={{ subject: "토큰 ID", value: nft.data.tokenId }}
                    tokenStandard={{ subject: "토큰 표준", value: nft.data.tokenStandard }}
                    supply={{ subject: "공급량", value: nft.data.supply }}
                    isTrade={{ subject: "판매", value: nft.data.isTrade }}
                />
            </PlatWrap>
            {transaction.data.length === 0 ? (
                <></>
            ) : (
                <>
                    <PlatWrap mode={mode}>
                        <NftTxList txList={transaction.data} />
                    </PlatWrap>
                    <TxBtn
                        marketId={marketId}
                        myAddress={eoa}
                        price={nft.data.price.price}
                        to={nft.data.owner}
                        ca={nft.data.ca}
                        krw={nft.data.krw}
                        tokenId={nft.data.tokenId}
                        name={nft.data.nftName}
                    />
                </>
            )}
        </>
    )
}

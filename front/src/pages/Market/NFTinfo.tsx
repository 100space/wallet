import { NftInfomation, NftStandardInformation } from "@common/Infomation"
import { NftTxList } from "@common/List"
import { NftStatus } from "@common/NftStatus"
import { ErrorPage } from "@common/error"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { LoadingHeader } from "@common/header/LoadingHeader"
import { TransactionRow } from "@components/Transaction"
import { LoadingBar } from "@components/loading"
import { ImageForm, PlatWrap } from "@styled/index"
import requestServer from "@utils/axios/requestServer"
import { INFTInfomationByMarket, INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { ModeState, MyAccounts } from "@utils/localStorage"
import axios from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilValue } from "recoil"

const data3: ITransaction = {
  state: "sender",
  opponent: "0x00000000000000000000000000000000000000000000000000000",
  timestamp: "7월21일",
  amounts: [
    { currency: "KRW", amount: 4500 },
    { currency: "ETH", amount: 0.0005 },
  ],
}

export const NFTInfoPage = () => {
  const { mode } = useRecoilValue(ModeState)
  const location = useLocation()
  const navigate = useNavigate()
  const { address: eoa } = useRecoilValue(MyAccounts)
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
        const standard = decodeURI(tokenStandard)
        if (standard === "ERC 721") {
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
            tokenStandard: standard,
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
        if (standard === "ERC 1155") {
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
            tokenStandard: standard,
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

  const createPath = (pathname: string) => {
    console.log(pathname)
    const url = pathname.split("/")
    return { ca: url[url.length - 3], tokenId: url[url.length - 2], tokenStandard: url[url.length - 1] }
  }

  const clickBackBtnHandler = (e: MouseEvent) => {
    navigate(`/market/collection/${createPath(location.pathname).ca}`)
  }

  useEffect(() => {
    getNFT(createPath(location.pathname))
  }, [])

  if (nft.isLoading || !nft.data)
    return (
      <>
        <LoadingHeader />
        <LoadingBar />
      </>
    )
  if (nft.isError) return <ErrorPage code={404} message={""} />
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
      <PlatWrap mode={mode}>
        <NftTxList txList={[data3, data3, data3, data3, data3]} />
      </PlatWrap>
    </>
  )
}

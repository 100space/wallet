import { AccountList } from "@common/List"
import { BlockList } from "@common/List/TxList"
import { AccountBtn } from "@components/AccountBtn"
import { QrComp, SendComp, nftGetList, sendList, tokenBringList } from "@components/PopupItem"
import { GetWallet } from "@components/getWallet"
import { useNFTin } from "@hooks/useNFTin"
import { usePopup } from "@hooks/usePopup"
import { useQuery } from "@tanstack/react-query"
import { IBlockRow, ITx } from "@utils/interFace/block.interface"
import { IAccountRow, address } from "@utils/interFace/core"
import { IAccountAmount } from "@utils/interFace/core"
import { MyAccounts, MyAccountsList, MyInfo, MyNetwork } from "@utils/localStorage"
import { CurrentTxData } from "@utils/localStorage/Alarm"
import axios from "axios"
import { ethers } from "ethers"
import { useState, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { getBalance } from "web3/lib/commonjs/eth.exports"

export const PopUpItem = ({ address }: { address?: string }) => {
  const [{ isOpen, contents }, setPopup] = usePopup()
  const nftin = useNFTin()
  const tx = useRecoilValue(CurrentTxData)
  const myInfo = useRecoilValue(MyInfo)
  const myNetWork = useRecoilValue(MyNetwork)
  const myAccount = useRecoilValue(MyAccounts)
  const myAccountList = useRecoilValue(MyAccountsList)
  const [data, setData] = useState<typeof myAccountList>([])

  const { symbol } = myInfo[myNetWork as keyof typeof myInfo].networks

  const getBlance = async (address: string) => {
    return await nftin.provider.getBalance(address)
  }

  const itemSwitch = () => {
    if (contents.indexOf("0x") !== -1 && contents.length === 42) {
      return (
        <SendComp
          inputArray={sendList}
          BtnContent={"송금하기"}
          address={address}
          key={address}
          className="sendTransaction"
        />
      )
    }

    switch (contents) {
      case "트랜잭션":
        return <BlockList blocks={tx} />
      case "입금받기":
        return <QrComp />
      case "토큰 가져오기":
        return <SendComp inputArray={tokenBringList} BtnContent={contents} key={contents} className="getToken" />
      case "NFT 가져오기":
        return <SendComp inputArray={nftGetList} BtnContent={contents} key={contents} className="getNft" />
      case "송금하기":
        return <SendComp inputArray={sendList} BtnContent={contents} key={contents} className="sendTransaction" />
      case "My Account":
        return <AccountList accounts={data} />
      case "계정 불러오기":
        return <GetWallet />
      default:
        return null
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (nftin) {
        const dataPromises = myAccountList.map(async (v: typeof myAccountList) => {
          const balance = await getBlance(v.address)
          const formattedBalance = ethers.formatEther(balance)
          return {
            address: v.address,
            asset: { amount: formattedBalance, currency: symbol },
            alias: v.alias,
          }
        })
        const resolvedData = await Promise.all(dataPromises)
        setData(resolvedData)
      }
    }
    fetchData()
  }, [nftin, myAccountList])

  return <>{itemSwitch()}</>
}

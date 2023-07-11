import { AccountList } from "@common/List"
import { BlockList } from "@common/List/TxList"
import { AccountBtn } from "@components/AccountBtn"
import { QrComp, SendComp, sendList, tokenBringList } from "@components/PopupItem"
import { GetWallet } from "@components/getWallet"
import { useNFTin } from "@hooks/useNFTin"
import { usePopup } from "@hooks/usePopup"
import { IBlockRow } from "@utils/interFace/block.interface"
import { IAccountRow, address } from "@utils/interFace/core"
import { IAccountAmount } from "@utils/interFace/core"
import { MyAccountsList, MyInfo, MyNetwork } from "@utils/localStorage"
import { ethers } from "ethers"
import { useState, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { getBalance } from "web3/lib/commonjs/eth.exports"

const blockData: IBlockRow[] = [
    {
        blockNumber: 17562089,
        blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4",
    },
    {
        blockNumber: 17562088,
        blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4",
    },
    {
        blockNumber: 17562087,
        blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4",
    },
    {
        blockNumber: 17562086,
        blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4",
    },
    {
        blockNumber: 17562085,
        blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4",
    },
    {
        blockNumber: 17562084,
        blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4",
    },
]

export const PopUpItem = ({ address }: { address?: string }) => {
    const [{ isOpen, contents }, setPopup] = usePopup()
    const nftin = useNFTin()
    const myInfo = useRecoilValue(MyInfo)
    const myNetWork = useRecoilValue(MyNetwork)
    const myAccountList = useRecoilValue(MyAccountsList)
    const [data, setData] = useState<typeof myAccountList>([])
    const getBlance = async (address: string) => {
        return await nftin.provider.getBalance(address)
    }
    const { symbol } = myInfo[myNetWork as keyof typeof myInfo].networks

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
        console.log(contents, "contents")
        switch (contents) {
            case "트랜잭션":
                return <BlockList blocks={blockData} />
            case "입금받기":
                return <QrComp />
            case "토큰 가져오기":
                return (
                    <SendComp inputArray={tokenBringList} BtnContent={contents} key={contents} className="getToken" />
                )
            case "송금하기":
                return (
                    <SendComp inputArray={sendList} BtnContent={contents} key={contents} className="sendTransaction" />
                )
            case "My Account":
                return <AccountList accounts={data} />
            case "계정 불러오기":
                console.log("here")
                return <GetWallet />
            default:
                return null
        }
    }

    return <>{itemSwitch()}</>
}

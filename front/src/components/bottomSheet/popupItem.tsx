import { AccountList } from "@common/List"
import { BlockList } from "@common/List/TxList"
import { QrComp, SendComp, sendList, tokenBringList } from "@components/PopupItem"
import { usePopup } from "@hooks/usePopup"
import { IBlockRow } from "@utils/interFace/block.interface"
import { IAccountRow } from "@utils/interFace/core"
import { IAccountAmount } from "@utils/interFace/core"

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

const data: IAccountRow = {
    accountImg: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    address: "0x90231ur90jwqoie2130373570809729836544453",
    asset: { amount: 123, currency: "BTC" },
}
export const PopUpItem = () => {
    const [{ isOpen, contents }, setPopup] = usePopup()
    const itemSwitch = () => {
        switch (contents) {
            case "트랜잭션":
                return <BlockList blocks={blockData} />
            case "입금받기":
                return <QrComp />
            case "토큰 가져오기":
                return <SendComp inputArray={tokenBringList} BtnContent={contents} />
            case "송금하기":
                return <SendComp inputArray={sendList} BtnContent={contents} />
            case "My Account":
                return <AccountList accounts={[data, data, data]} />
            default:
                break
        }
    }

    return <>{itemSwitch()}</>
}

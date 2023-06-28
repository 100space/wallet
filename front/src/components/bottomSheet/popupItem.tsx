import { BlockList } from "@common/List/TxList"
import { QrComp, SendComp, bringList } from "@components/PopupItem"
import { usePopup } from "@hooks/usePopup"
import { IBlockRow } from "@utils/interFace/block.interface"

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
export const PopUpItem = () => {
    const [{ isOpen, contents }, setPopup] = usePopup()

    const itemSwitch = () => {
        switch (contents) {
            case "트랜잭션":
                return <BlockList blocks={blockData} />
            case "입금받기":
                return <QrComp />
            case "토큰 가져오기":
                return <SendComp inputArray={bringList} />
            default:
                break
        }
    }

    return <>{itemSwitch()}</>
}

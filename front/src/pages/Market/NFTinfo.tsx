import { NftInfomation, NftStandardInformation } from "@common/Infomation"
import { NftTxList } from "@common/List"
import { NftStatus } from "@common/NftStatus"
import { TransactionRow } from "@components/Transaction"
import { ImageForm, PlatWrap } from "@styled/index"
import { INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { ModeState } from "@utils/localStorage"
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

const data4: INFTStauts = {
    blockchain: [
        "블록체인",
        ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"],
    ],
    supply: ["발행량", "100개"],
    isTrade: ["거래가능", "99개"],
    isSell: ["판매중", "50개"],
}

const data5: INftInfomation = {
    owner: ["소유자", "0xas987f98as0987g"],
    blockchain: [
        "블록체인",
        ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"],
    ],
    ca: ["계약주소", "0xs089d7fsd089f7896578923"],
    tokenId: ["토큰 ID", "50"],
    tokenStandard: ["토큰 표준", "ERC 1155"],
}
const data6: INFTStandard = {
    nftName: "Gdori",
    nftId: 1234,
    like: 1234,
    ownerImage: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
    owner: "내 계정",
    collectionName: "asdfasdf",
    sellPrice: { currency: "ETH", price: 0.013 },
    chargePrice: { currency: "ETH", price: 0.0000013 },
}

export const NFTInfoPage = () => {
    const { mode } = useRecoilValue(ModeState)
    return (
        <>
            <PlatWrap mode={mode}>
                <ImageForm
                    height={"75vw"}
                    src="https://assets.coingecko.com/nft_contracts/images/3145/small/degods.png?1680194340"
                />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftStandardInformation nftStandardInfo={data6} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftStatus nftStatus={data4} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftInfomation nftInfo={data5} />
            </PlatWrap>
            <PlatWrap mode={mode}>
                <NftTxList txList={[data3, data3, data3, data3, data3]} />
            </PlatWrap>
        </>
    )
}

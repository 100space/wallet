import { NftStatus } from "@common/NftStatus"
import { NFTInfomationImg } from "@components/Nft/NftInfoImg"
import { INFTStauts, INftInfomation, INFTStandard } from "@utils/interFace/nft.interface"
import { NftInfomation } from "../NftInfomation"
import { NftStandardInformation } from "../NftStandardInformation"
import { styled } from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"

export const MyNftInformationWrap = styled.div<ISizeProps>`
    padding: 2rem;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    & > div {
        margin-top: 4rem;
    }

    & > div:nth-last-child(1) {
        margin-bottom: 4rem;
    }
`

const data4: INFTStauts = {
    blockchain: {
        subject: "블록체인",
        value: {
            name: "Polygon",
            image: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912"
        }
    },
    supply: {
        subject: "발행량",
        value: "100개"
    },
    isTrade: {
        subject: "거래가능",
        value: "100개"
    },
    isSell: {
        subject: "판매중",
        value: "50개"
    },
}

// const data6: INFTStandard = {
//     nftName: "Gdori",
//     nftId: 1234,
//     like: 1234,
//     ownerImage: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
//     owner: "내 계정",
//     collectionName: "asdfasdf",
//     sellPrice: { currency: "ETH", price: 0.013 },
//     fee: { currency: "ETH", price: 0.0000013 }
// }

export const MyNftInformation = () => {
    return (
        <>
        </>
        // <MyNftInformationWrap>
        //     <NFTInfomationImg />
        //     <NftStandardInformation sellPrice={data6.sellPrice} fee={data6.fee} nftName={data6.nftName} nftId={data6.nftId} like={data6.like} ownerImage={data6.ownerImage} owner={data6.owner} collectionName={data6.collectionName} />
        //     <NftStatus nftStatus={data4} />
        //     <NftInfomation nftInfo={data5} />
        // </MyNftInformationWrap>
    )
}
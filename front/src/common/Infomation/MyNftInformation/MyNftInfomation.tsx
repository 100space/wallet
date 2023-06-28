import { NftStatus } from "@common/NftStatus"
import { NFTInfomationImg } from "@components/Nft/NftInfoImg"
import { INFTStauts, INftInfomation, INFTStandard } from "@utils/interFace/nft.interface"
import { NftInfomation } from "../NftInfomation"
import { NftStandardInformation } from "../NftStandardInformation"
import { styled } from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"

export const MyNftInformationWrap = styled.div<ISizeProps>`
    padding: 2rem;
    width: ${({ width }) => width || "100%" };
    height: ${({ height }) => height || "100%" };

    & > div {
        margin-top: 4rem;
    }

    & > div:nth-last-child(1) {
        margin-bottom: 4rem;
    }
`

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
    owner: ["내 계정 닉네임", "내 계정 주소"],
    blockchain: [
        "블록체인",
        ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"],
    ],
    ca: ["계약주소", "0xagdsdgasdgasdgasdgasdgasdg"],
    tokenId: ["토큰 ID", 50],
    tokenStandard: ["토큰 표준", "ERC 1155"],
}

const data6: INFTStandard = {
    nftName: "Gdori",
    nftId: 1234,
    like: 1234,
    ownerImage: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
    owner: "내 계정",
    collectionName: "asdfasdf",
    sellPrice: {currency: "ETH", price: 0.013},
    chargePrice: {currency: "ETH", price: 0.0000013}
}

export const MyNftInformation = () => {
    return (
        <MyNftInformationWrap>
            <NFTInfomationImg />
            <NftStandardInformation nftStandardInfo={data6} />
            <NftStatus nftStatus={data4} />
            <NftInfomation nftInfo={data5} />
        </MyNftInformationWrap>
    )
}
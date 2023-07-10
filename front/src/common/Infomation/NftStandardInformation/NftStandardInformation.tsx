import { Board } from "@components/Board"
import { Wrapper } from "@styled/index"
import { INFTStandard } from "@utils/interFace/nft.interface"
import { NftStandardInformationCollection } from "./NftStandardInformationCollection"
import { NftStandardInformationOwner } from "./NftStandardInformationOwner"
import { NftStandardInformationSubject } from "./NftStandardInformationSubject"
import { PriceRow } from "@components/PriceRow"

export const NftStandardInformation = ({ nftName, tokenId, like, creater, collectionName, sellPrice, fee, owner }: INFTStandard) => {
    console.log(creater)

    return (
        <Board>
            <NftStandardInformationCollection collectionName={collectionName} />
            <Wrapper>
                <NftStandardInformationSubject nftName={nftName} tokenId={tokenId} like={like} />
                <NftStandardInformationOwner creater={creater} owner={owner} />
            </Wrapper>
            <PriceRow text={["소유자", owner]} />
            <PriceRow text={["판매가격", sellPrice.price, sellPrice.currency]} />
            <PriceRow text={["수수료", fee.price, fee.currency]} />
        </Board>
    )
}
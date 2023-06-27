import { Board } from "@components/Board"
import { Wrapper } from "@styled/index"
import { INFTStandard } from "@utils/interFace/nft.interface"
import { NftStandardInformationCollection } from "./NftStandardInformationCollection"
import { NftStandardInformationOwner } from "./NftStandardInformationOwner"
import { NftStandardInformationSubject } from "./NftStandardInformationSubject"
import { PriceRow } from "@components/PriceRow"


export const NftStandardInformation = (props: { nftStandardInfo: INFTStandard }) => {
    return (
        <Board>
            <NftStandardInformationCollection collectionName={props.nftStandardInfo.collectionName} />
            <Wrapper>
                <NftStandardInformationSubject nftName={props.nftStandardInfo.nftName} nftId={props.nftStandardInfo.nftId} like={props.nftStandardInfo.like} />
                <NftStandardInformationOwner ownerImage={props.nftStandardInfo.ownerImage} owner={props.nftStandardInfo.owner} />
            </Wrapper>
            <PriceRow text={["판매가격", props.nftStandardInfo.sellPrice.price, props.nftStandardInfo.sellPrice.currency]}/>
            <PriceRow text={["수수료", props.nftStandardInfo.chargePrice.price, props.nftStandardInfo.chargePrice.currency]}/>
        </Board>
    )
}
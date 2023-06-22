import { NftCardImgWrap, NftCardImage } from "./styled"
import { INFTImg } from "@utils/interFace/nft.interface"

export const NftCardImg = ({ image }: INFTImg) => {
    return(
        <>
            <NftCardImgWrap width={"16rem"} height={"16rem"}>
                <NftCardImage src={image} />
            </NftCardImgWrap>
        </>
    )
}
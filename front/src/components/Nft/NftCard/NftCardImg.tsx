import { NftCardImgWrap, NftCardImage } from "./styled"
import { INFTImg } from "@utils/interFace/nft.interface"

export const NftCardImg = ({ width, height, image }: INFTImg) => {
    return(
        <>
            <NftCardImgWrap width={width} height={height}>
                <NftCardImage src={image} />
            </NftCardImgWrap>
        </>
    )
}
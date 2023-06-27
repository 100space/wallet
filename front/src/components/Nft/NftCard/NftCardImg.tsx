import { useLocation } from "react-router"
import { NftCardImgWrap, NftCardImage } from "./styled"
import { INFTImg } from "@utils/interFace/nft.interface"

export const NftCardImg = ({ width, height, image, className }: INFTImg) => {
    return (
        <>
            {className !== "card" ? (
                <NftCardImgWrap width={width} height={height}>
                    <NftCardImage src={image} height="5rem" />
                </NftCardImgWrap>
            ) : (
                <NftCardImgWrap height={height}>
                    <NftCardImage src={image} width={width} />
                </NftCardImgWrap>
            )}
        </>
    )
}

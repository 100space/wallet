import { useLocation } from "react-router"
import { NftCardImgWrap, NftCardImage } from "./styled"
import { INFTImg } from "@utils/interFace/nft.interface"

export const NftCardImg = ({ width, height, image }: INFTImg) => {
    const { pathname } = useLocation()
    return (
        <>
            {pathname.indexOf("/market") >= 0 ? (
                <NftCardImgWrap width={width} height={height}>
                    <NftCardImage src={image} />
                </NftCardImgWrap>
            ) : (
                <NftCardImgWrap height={height}>
                    <NftCardImage src={image} width={width} />
                </NftCardImgWrap>
            )}
        </>
    )
}

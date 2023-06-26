import { useGetMode } from "@hooks/useMode"
import { NftCardContentsWrap, NftCardContentWrap, NftCardContent } from "./styled"
import { INFTContents } from "@utils/interFace/nft.interface"

export const NftContents = ({ name, owner, prices }: INFTContents) => {
    const [modeState, setChange] = useGetMode()

    return (
        <NftCardContentsWrap height={"6.5rem"}>
            <NftCardContentWrap>
                <NftCardContent mode={modeState.mode} height={"1.2rem"}>
                    {name}
                </NftCardContent>
                <NftCardContent mode={modeState.mode} height={"1rem"}>
                    by {owner}
                </NftCardContent>
            </NftCardContentWrap>
            <NftCardContentWrap>
                <NftCardContent mode={modeState.mode} height={"1.2rem"}>
                    {prices[1].price} {prices[1].currency} ~
                </NftCardContent>
                <NftCardContent mode={modeState.mode} height={"1rem"}>
                    ≈ {prices[0].currency} {prices[0].price}
                </NftCardContent>
            </NftCardContentWrap>
        </NftCardContentsWrap>
    )
}

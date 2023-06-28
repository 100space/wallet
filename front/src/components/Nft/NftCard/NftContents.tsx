import { useGetMode } from "@hooks/useMode"
import { NftCardContentsWrap, NftCardContentWrap, NftCardContent } from "./styled"
import { INFTContents } from "@utils/interFace/nft.interface"

export const KRW = (value: number) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}
export const NftContents = ({ name, owner, prices }: INFTContents) => {
    const [modeState, setChange] = useGetMode()

    return (
        <NftCardContentsWrap height={"7.5rem"}>
            <NftCardContentWrap width={"13rem"}>
                <NftCardContent mode={modeState.mode} height={"1.6rem"} types={"name"}>
                    {name}
                </NftCardContent>
                <NftCardContent mode={modeState.mode} height={"1.1rem"} types={"owner"}>
                    by {owner}
                </NftCardContent>
            </NftCardContentWrap>
            <NftCardContentWrap>
                <NftCardContent mode={modeState.mode} height={"1.4rem"} types={"name"}>
                    {prices[1].price} {prices[1].currency} ~
                </NftCardContent>
                <NftCardContent mode={modeState.mode} height={"1.2rem"} types={"krw"}>
                    ≈ {prices[0].currency} {KRW(prices[0].price)}
                </NftCardContent>
            </NftCardContentWrap>
        </NftCardContentsWrap>
    )
}

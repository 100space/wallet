import { NftRowContentsWrap, NftRowContentWrap, NftRowContent } from "./styled/NftRow.styled"
import { INFTRow } from "@utils/interFace/nft.interface"
import { useGetMode } from "@hooks/useMode"

export const NftContents = (props : {nftInfo: INFTRow}) => {
    const [modeState, setChange] = useGetMode()

    return (
        <NftRowContentsWrap width={"28rem"} height={"5.6rem"}>

            <NftRowContentWrap height={'50%'} mode={modeState.mode}>
                <NftRowContent>
                    {props.nftInfo.rank}
                </NftRowContent>
                <NftRowContent>
                    {props.nftInfo.prices[1].price} {props.nftInfo.prices[1].currency}
                </NftRowContent>
            </NftRowContentWrap>

            <NftRowContentWrap height={'50%'} mode={modeState.mode}>
                <NftRowContent>
                    {props.nftInfo.owner}
                </NftRowContent>
                <NftRowContent>
                    ≈ {props.nftInfo.prices[0].price} {props.nftInfo.prices[0].currency}
                </NftRowContent>
            </NftRowContentWrap>
            
        </NftRowContentsWrap>
    )
}
import { RowContentsWrap, RowContentWrap, RowContent } from "./styled/NftRow.styled"
import { INFTRow } from "@utils/interFace/nft.interface"
import { useGetMode } from "@hooks/useMode"

export const NftContents = (props : {nftInfo: INFTRow}) => {
    const [modeState, setChange] = useGetMode()

    return (
        <RowContentsWrap height={"5.6rem"}>

            <RowContentWrap height={'50%'} mode={modeState.mode}>
                <RowContent>
                    {props.nftInfo.rank}
                </RowContent>
                <RowContent>
                    {props.nftInfo.prices[1].price} {props.nftInfo.prices[1].currency}
                </RowContent>
            </RowContentWrap>

            <RowContentWrap height={'50%'} mode={modeState.mode}>
                <RowContent>
                    {props.nftInfo.owner}
                </RowContent>
                <RowContent>
                    ≈ {props.nftInfo.prices[0].price} {props.nftInfo.prices[0].currency}
                </RowContent>
            </RowContentWrap>
            
        </RowContentsWrap>
    )
}
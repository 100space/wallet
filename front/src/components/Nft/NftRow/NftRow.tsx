import { INFTRow } from "@utils/interFace/nft.interface"
import { NftCardImg } from "../NftCard/NftCardImg"
import { NftContents } from "./NftRowContents"
import { RowWrap } from "./styled/NftRow.styled"
import { useGetMode } from "@hooks/useMode"

export const NftRow = (props : {nftInfo: INFTRow}) => {
    const [modeState, setChange] = useGetMode()

    return(
        <RowWrap height={'7.2rem'} mode={modeState.mode}>
            <NftCardImg width={"5.6rem"} height={"5.6rem"} image={props.nftInfo.image} />
            <NftContents nftInfo={props.nftInfo}/>
        </RowWrap>
    )
}
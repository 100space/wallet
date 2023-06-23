import { Board, NftBoardHeader, NftBoardContentRows } from "@components/Board"
import { INftInfomation } from "@utils/interFace/nft.interface"

export const NftInfo = ( props: {nftInfo : INftInfomation}) => {
    return(
        <Board>
            <NftBoardHeader text={["NFT 정보", "접기"]}/>
            <NftBoardContentRows info={props.nftInfo}/>
        </Board>
    )
}
import { Board, NftBoardContentRows } from "@components/Board"
import { NftBoardHeader } from "@components/Board/NftBoardHeader"
import { INFTStauts } from "@utils/interFace/nft.interface"

export const NftStatus = (props: { nftStatus: INFTStauts }) => {
    return (
        <Board>
            <NftBoardHeader text={["NFT 상태", "접기"]}/>
            <NftBoardContentRows info={props.nftStatus}/>
        </Board>
    )
}
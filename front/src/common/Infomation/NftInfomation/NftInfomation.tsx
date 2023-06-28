import { Board, NftBoardHeader, NftBoardContentRows } from "@components/Board"
import { useOpenHandler } from "@hooks/useOpen"
import { INftInfomation } from "@utils/interFace/nft.interface"

export const NftInfomation = (props: { nftInfo: INftInfomation }) => {
    const [isOpen, handleClose] = useOpenHandler()
    return (
        <Board>
            <NftBoardHeader text={["NFT 정보", "접기"]} onClick={handleClose} />
            <NftBoardContentRows info={props.nftInfo} open={isOpen} />
        </Board>
    )
}

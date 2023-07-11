import { Board, NftBoardHeader, NftBoardContentRows } from "@components/Board"
import { LoadingBar } from "@components/loading"
import { useOpenHandler } from "@hooks/useOpen"
import { INftInfomation } from "@utils/interFace/nft.interface"
import { Route } from "react-router"

export const NftInfomation = ({ owner, blockchain, ca, tokenId, tokenStandard, isTrade, supply }: INftInfomation) => {
    const [isOpen, handleClose] = useOpenHandler()

    if (!owner) return <LoadingBar />
    return (
        <Board>
            <NftBoardHeader text={["NFT 정보", "접기"]} onClick={handleClose} />
            <NftBoardContentRows info={{ owner, blockchain, ca, tokenId, tokenStandard, isTrade, supply }} open={isOpen} />
        </Board>
    )
}

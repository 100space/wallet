import { Board, NftBoardContentRows } from "@components/Board"
import { NftBoardHeader } from "@components/Board/NftBoardHeader"
import { useOpenHandler } from "@hooks/useOpen"
import { INFTStauts } from "@utils/interFace/nft.interface"
import { useState } from "react"

export const NftStatus = (props: { nftStatus: INFTStauts }) => {
    const [open, handleClose] = useOpenHandler()
    return (
        <Board>
            <NftBoardHeader text={["NFT 상태", "접기"]} onClick={handleClose} />
            <NftBoardContentRows info={props.nftStatus} open={open} />
        </Board>
    )
}

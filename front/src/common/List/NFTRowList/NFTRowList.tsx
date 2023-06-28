import { ListHeader } from "@common/header/ListHeader"
import { NftRow } from "@components/Nft"
import { INFTRow } from "@utils/interFace/nft.interface"
import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"
import { RowListWrap } from "./styled"

export const NFTRowList = (props: { nftRows: INFTRow[] }) => {
    const { mode } = useRecoilValue(ModeState)
    const nftRows = (nftRows: INFTRow[]) => {
        return nftRows.map((v, index) => <NftRow key={index} nftInfo={v} />)
    }

    return (
        <RowListWrap mode={mode}>
            <ListHeader />
            {nftRows(props.nftRows)}
        </RowListWrap>
    )
}

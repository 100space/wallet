import { ListHeader } from "@common/header/ListHeader"
import { NftRow } from "@components/Nft"
import { INFTRow } from "@utils/interFace/nft.interface"

export const NFTRowList = (props: { nftRows: INFTRow[]}) => {
    
    const nftRows = (nftRows: INFTRow[]) => {
        return nftRows.map( (v, index) => <NftRow key={index} nftInfo={v} />)
    }

    return(
        <>
            <ListHeader />
            {nftRows(props.nftRows)}
        </>
    )
}
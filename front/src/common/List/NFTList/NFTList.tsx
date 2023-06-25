import { ListHeader } from "@common/header/ListHeader"
import { NftRow } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"
import { INFTRow } from "@utils/interFace/nft.interface"

export const NFTList = (props: { nftRows: INFTRow[]}) => {
    
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
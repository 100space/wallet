import { ListHeader } from "@common/header/ListHeader"
import { NftRow } from "@components/Nft"
import { INFTRow } from "@utils/interFace/nft.interface"
import { ModeState, SelectedNFTCa } from "@utils/localStorage"
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil"
import { RowListWrap } from "./styled"
import { MouseEvent } from "react"
import { Navigate, useNavigate } from "react-router"

export const NFTRowList = (props: { nftRows: INFTRow[], setNftCa: SetterOrUpdater<string> }) => {
    const { mode } = useRecoilValue(ModeState)
    const [nftCa, setNftCa] = useRecoilState(SelectedNFTCa)
    const navigate = useNavigate()

    const clickNftRow = (e: MouseEvent, ca: string | undefined) => {
        if (ca === undefined) return
        setNftCa(ca)
        navigate(`market/nft/${ca}`)
    }

    const nftRows = (nftRows: INFTRow[]) => {
        return nftRows.map((v, index) => <NftRow key={index} nftInfo={v} onClick={clickNftRow} />)
    }

    return (
        <RowListWrap mode={mode}>
            <ListHeader />
            {nftRows(props.nftRows)}
        </RowListWrap>
    )
}

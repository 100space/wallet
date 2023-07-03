import { TokenRow } from "@components/Tokens"
import { ITokenRow } from "@utils/interFace/core"
import { AssetsListWrap, AssetsNFTCardsWrap, AssetsNFTHeader } from "./styled/AssetTokenList.styled"
import { TokenListBtn } from "@components/Button/TokenListBtn"
import { INFTCard } from "@utils/interFace/nft.interface"
import { AssetsListHeader } from "@common/header/AssetsHeader"
import { MouseEvent, useState } from "react"
import { NftCard } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"
import { usePopup } from "@hooks/usePopup"


export const AssetsList = (props: { tokenList?: ITokenRow[]; nftList?: INFTCard[] }) => {
    const [selected, setSelected] = useState([true, false])
    const [{ isOpen, contents }, setPopUp] = usePopup()
    const [modeState, setModeState] = useGetMode()

    const assetTokenList = (tokens: ITokenRow[]) => {
        return tokens.map((v, index) => <TokenRow key={index} token={v} />)
    }

    const nftCardsList = (nftCards: INFTCard[]) => {
        return nftCards.map((v, index) => <NftCard key={index} nftInfo={v} className="card" />)
    }

    const handleClick = (e: MouseEvent, index: number) => {
        const updatedSelected = selected.map((v, idx) => (idx === index ? !v : false))
        if (updatedSelected.filter((v) => v === true).length === 0) return
        setSelected(updatedSelected)
    }
    const handlePopup = (e: MouseEvent) => {
        const { innerHTML } = e.target as HTMLButtonElement
        setPopUp(innerHTML)
    }
    return (
        <AssetsListWrap>
            <AssetsListHeader onClick={handleClick} selected={selected} />
            {props.tokenList && selected[0] && (
                <>
                    <AssetsNFTHeader mode={modeState.mode}>{"My Assets"}</AssetsNFTHeader>
                    {assetTokenList(props.tokenList)}
                </>
            )}
            {props.nftList && selected[1] && (
                <>
                    <AssetsNFTHeader mode={modeState.mode}>{"My Collection"}</AssetsNFTHeader>
                    <AssetsNFTCardsWrap>{nftCardsList(props.nftList)}</AssetsNFTCardsWrap>
                </>
            )}
            <TokenListBtn width={"70%"} onClick={handlePopup}>
                {selected[0] === true ? "토큰 가져오기" : "NFT 가져오기"}
            </TokenListBtn>
        </AssetsListWrap>
    )
}

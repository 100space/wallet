import { TokenRow } from "@components/Tokens"
import { IAccountAmount, ITokenRow } from "@utils/interFace/core"
import { AssetsListWrap } from "./styled/AssetTokenList.styled"
import { TokenListBtn } from "@components/Button/TokenListBtn"
import { INFTCard } from "@utils/interFace/nft.interface"
import { styled } from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { AssetsListHeader } from "@common/header/AssetsHeader"
import { MouseEvent, useState } from "react"
import { NftCard } from "@components/Nft"
import { useGetMode } from "@hooks/useMode"

export const AssetsNFTHeader = styled.div<ISizeProps>`
    padding: 1.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: ${({theme, mode}) => mode && theme[mode].text} ;
    background-color: ${({ theme, mode}) => mode && theme[mode].bgBtn};
`

export const AssetsNFTCardsWrap = styled.div`
    padding: 1rem 0;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`

export const AssetsList = (props: { tokenList?: ITokenRow[], nftList?: INFTCard[] }) => {
    const [selected, setSelected] = useState([true, false])
    const [modeState, setModeState] = useGetMode()

    const assetTokenList = (tokens: ITokenRow[]) => {
        return tokens.map((v, index) => <TokenRow key={index} token={v} />)
    }

    const nftCardsList = (nftCards: INFTCard[]) => {
        return nftCards.map((v, index) => (
            <NftCard key={index} nftInfo={v} />
        ))
    }

    const handleClick = (e: MouseEvent, index: number) => {
        const updatedSelected = selected.map((v, idx) => (idx === index ? !v : false));
        if (updatedSelected.filter(v => v === true).length === 0) return
        setSelected(updatedSelected)
    }

    return (
        <AssetsListWrap>
            <AssetsListHeader onClick={handleClick} selected={selected} />
            {props.tokenList && selected[0] && assetTokenList(props.tokenList)}
            {props.nftList && selected[1] && (
                <>
                    <AssetsNFTHeader mode={modeState.mode}>
                        {"내 컬렉션"}
                    </AssetsNFTHeader>
                    <AssetsNFTCardsWrap>
                        {nftCardsList(props.nftList)}
                    </AssetsNFTCardsWrap>
                </>
            )}
            <TokenListBtn width={'80%'}>
                {selected[0] === true ? "토큰 가져오기" : "NFT 가져오기"}
            </TokenListBtn>
        </AssetsListWrap>
    )
}
import { TokenRow } from "@components/Tokens"
import { ITokenRow } from "@utils/interFace/core"
import { AssetsListWrap } from "./styled/AssetTokenList.styled"
import { TokenListBtn } from "@components/Button/TokenListBtn"
import { INFTCard } from "@utils/interFace/nft.interface"
import { styled } from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { AssetsListHeader } from "@common/header/AssetsHeader"
import { MouseEvent, useState } from "react"

export const AssetsList = (props: {list: ITokenRow[]}) => {
    const [ selected, setSelected ] = useState([true, false])

    const assetTokenList = ( tokens: ITokenRow[] ) => {
        return tokens.map((v, index) => <TokenRow key={index} token={v} /> )
    }

    const handleClick = (e: MouseEvent) => {
        console.log(e.target)
    }

    return(
        <AssetsListWrap>
            <AssetsListHeader onClick={handleClick} selected={selected}/>
            {assetTokenList(props.list)}
            <TokenListBtn>
                {selected[0] === true ? "토큰 가져오기" : "NFT 가져오기"}
            </TokenListBtn>
        </AssetsListWrap>
    )
}
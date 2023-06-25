import { TokenRow } from "@components/Tokens"
import { ITokenRow } from "@utils/interFace/core"
import { AssetTokenListWrap } from "./styled/AssetTokenList.styled"
import { TokenListBtn } from "@components/Button/TokenListBtn"

export const AssetTokenList = (props: {tokens: ITokenRow[]}) => {

    const assetTokenList = ( tokens: ITokenRow[] ) => {
        return tokens.map((v, index) => <TokenRow key={index} token={v} /> )
    }

    return(
        <AssetTokenListWrap>
            {assetTokenList(props.tokens)}
            <TokenListBtn>
                토큰 가져오기
            </TokenListBtn>
        </AssetTokenListWrap>
    )
}
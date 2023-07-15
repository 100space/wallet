import {
    AccountRowWrap,
    AccountRowImgWrap,
    AccountRowImg,
    AccountRowAddress,
    AccountAssets,
} from "@components/Accounts/styled/Accounts.styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ITokenRow } from "@utils/interFace/core"
import { TokenInfoWrap } from "./styled/TokenRow.styled"

export const TokenRow = (props: { token: ITokenRow }) => {
    const [modeState, setModeState] = useGetMode()
    return (
        <AccountRowWrap mode={modeState.mode} width={"100%"} height={"7rem"}>
            <AccountRowImgWrap width={"15%"} height={"100%"}>
                <AccountRowImg src={props.token.tokenImg} />
            </AccountRowImgWrap>

            <TokenInfoWrap width={"80%"} height={"100%"}>
                <AccountRowAddress>
                    {(Math.floor(props.token.assets[0].amount * 1000) / 1000)
                        .toString()
                        .replace(/\d(?=(\d{3})+\b)/g, "$&,") +
                        " " +
                        props.token.assets[0].currency}
                </AccountRowAddress>

                <AccountAssets>
                    {props.token.assets[1].currency +
                        " " +
                        (Math.floor(props.token.assets[1].amount * 1000) / 1000)
                            .toString()
                            .replace(/\d(?=(\d{3})+\b)/g, "$&,")}
                </AccountAssets>
            </TokenInfoWrap>
        </AccountRowWrap>
    )
}

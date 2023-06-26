import { AccountRowWrap, AccountRowImgWrap, AccountRowImg, AccountRowAddress, AccountAssets } from "@components/Accounts/styled/Accounts.styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ITokenRow } from "@utils/interFace/core"
import { TokenInfoWrap } from "./styled/TokenRow.styled"


export const TokenRow = (props: { token: ITokenRow }) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <AccountRowWrap mode={modeState.mode} width={"100%"}>

            <AccountRowImgWrap width={"15%"} height={"100%"}>
                <AccountRowImg src={props.token.tokenImg} />
            </AccountRowImgWrap>

            <TokenInfoWrap width={"80%"} height={"100%"}>
                <AccountRowAddress >
                    {props.token.assets[0].amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + props.token.assets[0].currency}
                </AccountRowAddress>

                <AccountAssets>
                    {props.token.assets[1].currency + " " + props.token.assets[1].amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </AccountAssets>
            </TokenInfoWrap>

            <Icon icon={"ep:arrow-up-bold"} rotate={1} width={"5%"} height={"100%"}/>
        </AccountRowWrap>
    )
}
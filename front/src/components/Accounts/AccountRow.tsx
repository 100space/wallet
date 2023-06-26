import { AccountRowWrap, AccountRowImgWrap, AccountRowImg, AccountRowAddress, AccountAssets } from "./styled/Accounts.styled"
import { IAccountRow } from "@utils/interFace/core"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"



export const AccountRow = (props: { account: IAccountRow }) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <AccountRowWrap mode={modeState.mode} width={"100%"}>

            <AccountRowImgWrap width={"15%"} height={"2.4rem"}>
                <AccountRowImg src={props.account.accountImg} />
            </AccountRowImgWrap>

            <AccountRowAddress width={"55%"}>
                {props.account.address.substring(0, 6) + "..." + props.account.address.substring(36, 40)}
            </AccountRowAddress>

            <AccountAssets width={"25%"}>
                {props.account.asset.amount + " " + props.account.asset.currency}
            </AccountAssets>

            <Icon icon={"ep:arrow-up-bold"} rotate={1} width={"5%"} />
        </AccountRowWrap>
    )
}
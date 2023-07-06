import {
    AccountRowWrap,
    AccountRowImgWrap,
    AccountRowImg,
    AccountRowAddress,
    AccountAssets,
} from "./styled/Accounts.styled"
import { IAccountRow } from "@utils/interFace/core"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { TextComp } from "@common/initStep/styled"

export const AccountRow = (props: { account: IAccountRow }) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <AccountRowWrap mode={modeState.mode} width={"100%"} height={"6rem"}>
            <AccountRowImgWrap width={"30%"} height={"90%"}>
                <AccountRowImg src={props.account.accountImg} className="AccountImg" />
            </AccountRowImgWrap>
            <AccountRowAddress width={"55%"}>
                <TextComp fontSize="2rem" width={"55%"}>
                    Account 1
                </TextComp>
                <span>{props.account.address.substring(0, 6) + "..." + props.account.address.substring(36, 40)}</span>
            </AccountRowAddress>

            <AccountAssets width={"25%"}>
                <TextComp fontSize="1.4rem">{props.account.asset.amount + " " + props.account.asset.currency}</TextComp>
            </AccountAssets>

            <Icon icon={"ep:arrow-up-bold"} rotate={1} width={"5%"} />
        </AccountRowWrap>
    )
}

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
import { TextComp, AccountAdWrap } from "@common/initStep/styled"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const AccountRow = (props: { account: IAccountRow; index?: number }) => {
    const [modeState, setModeState] = useGetMode()
    const [accountState, setAccountState] = useState(false)

    const accountClick = () => {
        setAccountState(!accountState)
    }

    return (
        <AccountRowWrap mode={modeState.mode} width={"100%"} height={"6rem"}>
            <AccountRowImgWrap width={"20%"} height={"90%"}>
                <AccountRowImg src={props.account.accountImg} className="AccountImg" />
            </AccountRowImgWrap>
            <AccountAdWrap>
                <AccountRowAddress width={"100%"}>
                    <TextComp fontSize="2rem" width={"100%"}>
                        Account {props.index}
                    </TextComp>
                    <span>
                        {props.account.address.substring(0, 8) + "..." + props.account.address.substring(34, 40)}
                    </span>
                </AccountRowAddress>
            </AccountAdWrap>
            <AccountAssets width={"25%"}>
                <TextComp fontSize="1.4rem">{props.account.asset.amount + " " + props.account.asset.currency}</TextComp>
            </AccountAssets>
            <Icon icon={"ep:arrow-up-bold"} rotate={1} style={{fontSize:"2.5rem"}} color="#ffc74d"/>
        </AccountRowWrap>
    )
}

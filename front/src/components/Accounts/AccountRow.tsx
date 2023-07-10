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
import { MouseEventHandler, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { MyAccounts, MyAccountsList } from "@utils/localStorage"

export const AccountRow = (props: { account: IAccountRow; index?: number }) => {
    const [modeState, setModeState] = useGetMode()
    const [accountState, setAccountState] = useRecoilState(MyAccounts)
    const [accountList, setAccountList] = useRecoilState(MyAccountsList)
    const accountRef = useRef(null)
    const accountClick = () => {
        if (accountRef.current) {
            const address = (accountRef.current as HTMLSpanElement).dataset.address
            const selectAddress = accountList.filter((v: typeof accountState) => v.address === address)
            setAccountState(selectAddress[0])
        }
    }

    return (
        <AccountRowWrap mode={modeState.mode} width={"90%"} height={"6rem"}>
            <AccountRowImgWrap width={"20%"} height={"90%"}>
                <AccountRowImg src={props.account.accountImg} className="AccountImg" />
            </AccountRowImgWrap>
            <AccountAdWrap>
                <AccountRowAddress width={"70%"}>
                    <TextComp fontSize="2rem" width={"100%"}>
                        {props.account.alias ? props.account.alias : `21341234`}
                    </TextComp>
                    <span ref={accountRef} data-address={props.account.address}>
                        {props.account.address.substring(0, 8) + "..." + props.account.address.substring(34, 40)}
                    </span>
                </AccountRowAddress>
            </AccountAdWrap>
            <AccountAssets width={"30%"}>
                <TextComp fontSize="1.6rem">{props.account.asset.amount + " " + props.account.asset.currency}</TextComp>
            </AccountAssets>
            <Icon
                icon={"ep:arrow-up-bold"}
                rotate={1}
                style={{ fontSize: "3rem" }}
                color="#ffc74d"
                onClick={accountClick}
            />
        </AccountRowWrap>
    )
}

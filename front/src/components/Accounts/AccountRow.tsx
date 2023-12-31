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
import { MyAccounts, MyAccountsList, AlarmData, MyNFT } from "@utils/localStorage"
import { Alert } from "@components/Alert/alert"
import { ITx } from "@utils/interFace/block.interface"

export const AccountRow = (props: { account: IAccountRow; index?: number }) => {
    const [modeState, setModeState] = useGetMode()
    const [accountState, setAccountState] = useRecoilState(MyAccounts)
    const [accountList, setAccountList] = useRecoilState(MyAccountsList)
    const [myNFT, setMyNFT] = useRecoilState(MyNFT)
    const [alarmData, setAlarmData] = useRecoilState(AlarmData)
    const accountRef = useRef(null)

    const accountClick = () => {
        if (accountRef.current) {
            const address = (accountRef.current as HTMLSpanElement).dataset.address
            const selectAddress = accountList.filter((v: typeof accountState) => v.address === address)
            setMyNFT([])
            setAlarmData([{ hash: "" } as ITx])
            setAccountState(selectAddress[0])
        }
    }
    const deleteAccount = () => {
        if (accountRef.current) {
            const address = (accountRef.current as HTMLSpanElement).dataset.address
            if (address === accountState.address) {
                Alert.fire({ title: "현재 선택된 계정은 삭제할 수 없습니다.", icon: "error" })
            } else {
                const index = accountList.findIndex((v: typeof accountState) => v.address === address)
                if (index === -1) return
                const updateAccountList = [...accountList]
                updateAccountList.splice(index, 1)
                setAccountList(updateAccountList)
            }
        }
    }

    return (
        <AccountRowWrap mode={modeState.mode} width={"90%"} height={"6rem"}>
            <Icon
                icon={"ep:arrow-up-bold"}
                rotate={1}
                style={{ fontSize: "4rem" }}
                color={props.account.address === accountState.address ? "#ffcd4d" : "#858585"}
                onClick={accountClick}
            />
            <AccountAdWrap>
                <AccountRowAddress width={"70%"}>
                    <TextComp fontSize="2rem" width={"100%"}>
                        {props.account.alias ? props.account.alias : `21341234`}
                    </TextComp>
                    <span ref={accountRef} data-address={props.account.address}>
                        {props.account.address.substring(0, 8) + "..." + props.account.address.substring(36, 42)}
                    </span>
                </AccountRowAddress>
            </AccountAdWrap>
            <AccountAssets width={"30%"}>
                <TextComp fontSize="1.6rem">
                    {Math.floor(props.account.asset.amount * 100000) / 100000 + " " + props.account.asset.currency}
                </TextComp>
            </AccountAssets>
            <Icon
                icon={"mi:delete"}
                style={{ fontSize: "3rem", marginLeft: "2rem" }}
                color={modeState.mode === "darkMode" ? "#fff" : "#000"}
                onClick={deleteAccount}
            />
        </AccountRowWrap>
    )
}

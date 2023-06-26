import { AccountListWrap } from "./styled/AccountList.styled"
import { IAccountRow } from "@utils/interFace/core"
import { AccountRow } from "@components/Accounts"


export const AccountList = (props: { accounts: IAccountRow[]}) => {

    const accountRows = ( accounts: IAccountRow[]) => {
        return accounts.map( (v, index ) => <AccountRow key={index} account={v} /> )
    }

    return(
        <AccountListWrap>
            {accountRows(props.accounts)}
        </AccountListWrap>
    )
}
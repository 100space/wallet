import { AccountListWrap } from "./styled/AccountList.styled"
import { IAccountRow } from "@utils/interFace/core"
import { AccountRow } from "@components/Accounts"
import { Button } from "@components/Button"
import { useRecoilState, useRecoilValue } from "recoil"
import { ModeState, MyAccountsList } from "@utils/localStorage"
import NFTin from "@core/index"
import { useNFTin } from "@hooks/useNFTin"

export const AccountList = (props: { accounts: IAccountRow[] }) => {
    const { mode } = useRecoilValue(ModeState)
    const [accountList, setAccountList] = useRecoilState(MyAccountsList)
    const nftin = useNFTin()
    const accountRows = (accounts: IAccountRow[]) => {
        return accounts.map((v, index) => <AccountRow key={index} account={v} index={index} />)
    }
    const handleCreateWallet = async () => {
        const newAccount = await nftin.wallet.createAccount()
        console.log(newAccount)
        console.log(accountList)
        setAccountList([...accountList, newAccount])
    }
    return (
        <AccountListWrap>
            {accountRows(props.accounts)}
            <Button
                content="계정추가"
                margin="3rem auto 0"
                fontSize="1.4rem"
                width={"50%"}
                height={"3rem"}
                mode={mode}
                onClick={handleCreateWallet}
            ></Button>
        </AccountListWrap>
    )
}

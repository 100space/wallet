import { AccountListWrap } from "./styled/AccountList.styled"
import { IAccountRow } from "@utils/interFace/core"
import { AccountRow } from "@components/Accounts"
import { Button } from "@components/Button"
import { useRecoilState, useRecoilValue } from "recoil"
import { ModeState, MyAccountsList } from "@utils/localStorage"
import NFTin from "@core/index"
import { useNFTin } from "@hooks/useNFTin"
import { usePopup } from "@hooks/usePopup"

export const AccountList = (props: { accounts: IAccountRow[] }) => {
    const { mode } = useRecoilValue(ModeState)
    const [{ isOpen, contents }, setPopup] = usePopup()
    const [accountList, setAccountList] = useRecoilState(MyAccountsList)
    const nftin = useNFTin()
    const accountRows = (accounts: IAccountRow[]) => {
        return accounts.map((v, index) => <AccountRow key={index} account={v} index={index} />)
    }
    const handleCreateWallet = async (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement
        if (target.innerHTML === "계정 추가") {
            const newAccount = await nftin.wallet.createAccount()
            const createWallet = { ...newAccount, alias: `Account ${accountList.length - 1}` }
            setAccountList([...accountList, createWallet])
        } else {
            const target = e.target as HTMLButtonElement
            setPopup(target.innerHTML)
        }
    }
    return (
        <AccountListWrap>
            {accountRows(props.accounts)}
            <div className="BtnWarp">
                <Button
                    content="계정 불러오기"
                    margin="3rem auto 0"
                    fontSize="1.4rem"
                    width={"40%"}
                    height={"4rem"}
                    mode={mode}
                    onClick={handleCreateWallet}
                ></Button>
                <Button
                    content="계정 추가"
                    margin="3rem auto 0"
                    fontSize="1.4rem"
                    width={"40%"}
                    height={"4rem"}
                    mode={mode}
                    onClick={handleCreateWallet}
                ></Button>
            </div>
        </AccountListWrap>
    )
}

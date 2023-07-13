import { AccountGetBtn } from "@components/AccountBtn/styled"
import { CloseBtn } from "@components/CloseBtn"
import { CloseWrap, GetWalletSub, GetWalletWrapper, WalletInfo, WalletInfoWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"
import { Button } from "@components/Button"
import { FormEventHandler } from "react"
import { useNFTin } from "@hooks/useNFTin"
import { ethers } from "ethers"
import { MyAccountsList } from "@utils/localStorage"
import { useRecoilState } from "recoil"
import { Alert } from "@components/Alert/alert"
import { usePopup } from "@hooks/usePopup"

export const GetWallet = () => {
    const [modeState, setChange] = useGetMode()
    const [{ isOpen, contents }, setPopup] = usePopup()
    const [accountList, setAccountList] = useRecoilState(MyAccountsList)
    const nftin = useNFTin()
    const handleGetWallet = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const privateKey = (e.currentTarget[0] as HTMLInputElement).value
        const getWallet = new ethers.Wallet(privateKey)
        const publicKey = getWallet.signingKey.publicKey
        const address = getWallet.address
        const getMyWallet = { publicKey, address, privateKey, alias: `Account ${accountList.length - 1}` }

        if (accountList.findIndex((v: typeof getMyWallet) => v.address === address) > -1) {
            Alert.fire({ icon: "error", title: "이미 등록된 계정입니다." })
        } else {
            setAccountList([...accountList, getMyWallet])
            return setPopup("")
        }
    }
    return (
        <>
            <GetWalletWrapper mode={modeState.mode}>
                <GetWalletSub mode={modeState.mode}>비공개키를 입력해주세요.</GetWalletSub>
                <WalletInfoWrap onSubmit={handleGetWallet}>
                    <WalletInfo mode={modeState.mode} />
                    <Button
                        width={"50%"}
                        height={"4rem"}
                        mode={modeState.mode}
                        margin={"2rem"}
                        content="계정 불러오기"
                        fontSize="1.6rem"
                    />
                </WalletInfoWrap>
                <AccountGetBtn />
            </GetWalletWrapper>
        </>
    )
}

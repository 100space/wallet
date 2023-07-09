import { AccountGetBtn } from "@components/AccountBtn/styled"
import { CloseBtn } from "@components/CloseBtn"
import { CloseWrap, GetWalletSub, GetWalletWrapper, WalletInfo, WalletInfoWrap } from "./styled"
import { useGetMode } from "@hooks/useMode"

export const GetWallet = () => {
    const [modeState, setChange] = useGetMode()

    return(
        <>
            <GetWalletWrapper mode={modeState.mode}>
                <CloseWrap>
                    <CloseBtn/>
                </CloseWrap>
                <GetWalletSub>비공개키를 입력해주세요.</GetWalletSub>
                <WalletInfoWrap>
                    <WalletInfo></WalletInfo>
                </WalletInfoWrap>
                <AccountGetBtn/>
            </GetWalletWrapper>
        </>
    )
}
import { AccountGetBtn } from "@components/AccountBtn/styled"
import { CloseBtn } from "@components/CloseBtn"
import { GetWalletWrap } from "./styled"

export const GetWallet = () => {

    return(
        <>
            <GetWalletWrap>
                <CloseBtn/>
                <h1>비공개키를 입력해주세요.</h1>
                <div></div>
                <AccountGetBtn/>
            </GetWalletWrap>
        </>
    )
}
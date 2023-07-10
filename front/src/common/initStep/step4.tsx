import { Description } from "@components/Description"
import { Welcome } from "@components/welcome"
import { StepWrap } from "./styled"
import { useEffect } from "react"
import { MyAccounts, MyAccountsList } from "@utils/localStorage"
import { useRecoilState } from "recoil"

export const Step4 = () => {
    const [accountList, setAccountList] = useRecoilState(MyAccountsList)
    const [myAccount, setMyAccount] = useRecoilState(MyAccounts)

    const addAccount = () => {
        const isDuplicate = accountList.some((account: typeof myAccount) => account === myAccount)

        if (!isDuplicate) {
            setAccountList([...accountList, myAccount])
        }
    }
    useEffect(() => {
        setAccountList([...accountList, myAccount])
    }, [])
    return (
        <StepWrap>
            <Welcome />
            <Description step={"step4"} onClick={() => addAccount()} />
        </StepWrap>
    )
}

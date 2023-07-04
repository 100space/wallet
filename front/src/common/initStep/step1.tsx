import { Agree } from "@components/Agree"
import { Description } from "@components/Description"
import { Mnemonic } from "@components/Mnemonic"
import { StepWrap } from "./styled"
import { useQuery } from "@tanstack/react-query"
import requestServer from "@utils/axios/requestServer"
import { LoadingBar } from "@components/loading"
import { useEffect, memo } from "react"
import { IsCheck, MyAccounts, MyProfile } from "@utils/localStorage"
import { useRecoilState, useResetRecoilState } from "recoil"

export const Step1 = () => {
    const [myProfile, setMyAccounts] = useRecoilState(MyProfile)
    const resetMyProfile = useResetRecoilState(MyProfile)
    const resetMyAccounts = useResetRecoilState(MyAccounts)
    const [isCheckState, setIsCheckState] = useRecoilState(IsCheck)

    const api = async () => {
        const result = await requestServer.get("account/mnemonic")
        return result.data
    }

    const { data, error, isLoading, refetch } = useQuery(["mnemonic"], api, {
        onSuccess: (data) => {
            setMyAccounts({ ...myProfile, myMnemonic: data.mnemonic })
        },
        refetchOnWindowFocus: false,
        enabled: myProfile.myMnemonic === "",
    })

    console.log(data, myProfile.myMnemonic)

    useEffect(() => {
        resetMyAccounts()
        resetMyProfile()
    }, [])
    useEffect(() => {
        if (data) setMyAccounts({ ...myProfile, myMnemonic: data.mnemonic })
    }, [data])

    return (
        <>
            {isLoading ? (
                <LoadingBar />
            ) : (
                <StepWrap>
                    <Description step={"step1"} />
                    <Mnemonic mnemonic={data?.mnemonic || myProfile.myMnemonic} />
                    <Agree mnemonic={data?.mnemonic || myProfile.myMnemonic} />
                </StepWrap>
            )}
        </>
    )
}

import { Agree } from "@components/Agree"
import { Description } from "@components/Description"
import { Mnemonic } from "@components/Mnemonic"
import { StepWrap } from "./styled"
import { useQuery } from "@tanstack/react-query"
import requestServer from "@utils/axios/requestServer"
import { LoadingBar } from "@components/loading"
import { useEffect } from "react"

export const Step1 = () => {
    const api = async () => {
        const result = await requestServer.get("/account/mnemonic")
        return result.data
    }
    const { data, error, isLoading } = useQuery(["mnemonic"], api)
    return (
        <>
            {isLoading ? (
                <LoadingBar />
            ) : (
                <StepWrap>
                    <Description step={"step1"} />
                    <Mnemonic mnemonic={data.mnemonic} />
                    <Agree mnemonic={data.mnemonic} />
                </StepWrap>
            )}
        </>
    )
}

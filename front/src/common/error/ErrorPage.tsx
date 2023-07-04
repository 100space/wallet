import { useGetMode } from "@hooks/useMode"
import { Error404Wrap, ErrorNumber, ErrorContent } from "./styled"

type ErrorCode = number

interface ErrorProps {
    code: ErrorCode
}

export const ErrorPage = ({ code }: ErrorProps) => {
    const [modeState, setModeState] = useGetMode()
    return (
        <Error404Wrap>
            <ErrorNumber data-h1={code}></ErrorNumber>
            <ErrorContent mode={modeState.mode}>Page Not Found</ErrorContent>
        </Error404Wrap>
    )
}
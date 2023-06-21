import { Description } from "@components/Description"
import { Welcome } from "@components/welcome"
import { StepWrap } from "./styled"

export const Step4 = () => {
    return (
        <StepWrap>
            <Welcome />
            <Description step={"step4"} />
        </StepWrap>
    )
}

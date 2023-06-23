import { Agree } from "@components/Agree"
import { Description } from "@components/Description"
import { Mnemonic } from "@components/Mnemonic"
import { StepWrap } from "./styled"

export const Step1 = () => {
    return (
        <StepWrap>
            <Description step={"step1"} />
            <Mnemonic
                mnemonic={[
                    "sound",
                    "school",
                    "demise",
                    "unique",
                    "kit",
                    "library",
                    "lady",
                    "tool",
                    "panel",
                    "vocal",
                    "grace",
                    "tone",
                ]}
            />
            <Agree
                mnemonic={[
                    "sound",
                    "school",
                    "demise",
                    "unique",
                    "kit",
                    "library",
                    "lady",
                    "tool",
                    "panel",
                    "vocal",
                    "grace",
                    "tone",
                ]}
            />
        </StepWrap>
    )
}

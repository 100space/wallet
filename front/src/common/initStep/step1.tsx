import { Agree } from "@components/Agree"
import { Description } from "@components/Description"
import { Mnemonic } from "@components/Mnemonic"

export const Step1 = () => {
    return (
        <>
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
                    "couple",
                    "upgrade",
                    "mad",
                ]}
            />
            <Agree />
        </>
    )
}

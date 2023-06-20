import { Icon } from "@iconify/react"
import { MouseEvent, useEffect, useState } from "react"
import { CopyButton } from "@components/CopyButton/CopyButton"
import { MnemonicBoxWrap, MnemonicBox, MnemonicContent, MnemonicVisible } from "./styled/Mnemonic.styled"

interface IMnemonic {
    mnemonic: string[]
}

export const Mnemonic = ({ mnemonic }: IMnemonic) => {
    const [isVisible, setVisible] = useState(false)
    const [blur, setBlur] = useState("0.25rem")
    const [mnemonicString, setMnemonicString] = useState("")

    const handleVisible = (e: MouseEvent<HTMLDivElement>) => {
        setVisible(!isVisible)
        if (blur === "0") setBlur("0.25rem")
        if (blur === "0.25rem") setBlur("0")
    }

    useEffect(() => {
        setMnemonicString(mnemonic.join(" "))
    }, [])

    return (
        <MnemonicBoxWrap height="20%">
            <MnemonicBox width="100%" height="80%">
                <MnemonicContent blur={blur}>{mnemonicString}</MnemonicContent>
                <MnemonicVisible width="2.5rem" onClick={handleVisible}>
                    {isVisible ? (
                        <Icon icon="mdi:eye-off" hFlip={true} />
                    ) : (
                        <Icon icon="heroicons:eye-solid" hFlip={true} />
                    )}
                </MnemonicVisible>
            </MnemonicBox>
            <CopyButton copyContent={mnemonicString} />
        </MnemonicBoxWrap>
    )
}

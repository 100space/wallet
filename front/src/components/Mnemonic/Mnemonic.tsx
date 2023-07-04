import { Icon } from "@iconify/react"
import { MouseEvent, useEffect, useState } from "react"
import { CopyButton } from "@components/CopyButton/CopyButton"
import { MnemonicBoxWrap, MnemonicBox, MnemonicContent, MnemonicVisible } from "./styled/Mnemonic.styled"
import { IMnemonic } from "@utils/interFace/core"
import { useGetMode } from "@hooks/useMode"

export const Mnemonic = ({ mnemonic }: IMnemonic) => {
    const [modeState, setChange] = useGetMode()
    const [isVisible, setVisible] = useState(false)
    const [blur, setBlur] = useState("0.25rem")
    const [mnemonicString, setMnemonicString] = useState("")

    const handleVisible = (e: MouseEvent<HTMLDivElement>) => {
        setVisible(!isVisible)
        blur === "0" ? setBlur("0.25rem") : setBlur("0")
    }

    useEffect(() => {
        if (!mnemonic) return
        mnemonic && setMnemonicString(mnemonic.join(" "))
    }, [mnemonic])

    return (
        <MnemonicBoxWrap height="100%">
            <MnemonicBox width="100%" height="80%">
                <MnemonicContent blur={blur}>{mnemonicString}</MnemonicContent>
                <MnemonicVisible width="2.5rem" onClick={handleVisible}>
                    {<Icon icon={isVisible ? "mdi:eye-off" : "heroicons:eye-solid"} hFlip={true} />}
                </MnemonicVisible>
            </MnemonicBox>
            <CopyButton copyContent={mnemonicString} />
        </MnemonicBoxWrap>
    )
}

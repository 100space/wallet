import { Icon } from '@iconify/react';
import { MouseEvent, useState } from "react";
import { CopyButton } from "@components/CopyButton/CopyButton";
import { MnemonicBoxWrap, MnemonicBox, MnemonicContent, MnemonicVisible } from "./styled/Mnemonic.styled";

interface IMnemonic {
    mnemonic: string[]
}

// const mnemonic = ["index", "salmon", "victory", "noise", "lava", "zebra", "pudding", "regular", "acoustic", "rule", "forget", "must"]
export const Mnemonic = ({ mnemonic }: IMnemonic) => {
    const [isVisible, setVisible] = useState(false)
    const [blur, setBlur] = useState('0')

    const handleVisible = (e: MouseEvent<HTMLDivElement>) => {
        setVisible(!isVisible)
        if(blur === '0') setBlur('0.25rem')
        if(blur === '0.25rem') setBlur('0')
    }

    return (
        <MnemonicBoxWrap height="15%">
            <MnemonicBox width="85%" height="80%">
                <MnemonicContent blur={blur}>
                    {mnemonic.join(' ')}
                </MnemonicContent>
                <MnemonicVisible width="2.5rem" onClick={handleVisible}>
                    {isVisible ? <Icon icon="mdi:eye-off" hFlip={true} /> : <Icon icon="heroicons:eye-solid" hFlip={true} />}
                </MnemonicVisible>
            </MnemonicBox>
            <CopyButton />
        </MnemonicBoxWrap>
    )
}
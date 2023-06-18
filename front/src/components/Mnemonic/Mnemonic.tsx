import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { useState } from "react";

export interface ISizeProps {
    width?: string
    height?: string
}

interface IMnemonicBox extends ISizeProps{
    bgColor?: string
}

interface IMenmonicContent extends ISizeProps{
    blur?: string
}

const MnemonicBoxWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

const MnemonicBox = styled.p<IMnemonicBox>`
    position: relative;
    padding: 1rem 2rem ;
    width: ${(props) => props.width || "100%"};
    min-height: 9rem;
    height: ${(props) => props.height || "100%"};
    background-color: ${(props) => props.bgColor || "#555555"};
    box-sizing: border-box;
`

const MnemonicContent = styled.p<IMenmonicContent>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    color: ${(props) => props.color || "#888888"};
    font-size: 1.6rem;
    font-weight: 400;
    filter: blur(${(props) => props.blur || "0.4rem"});
`

const MnemonicVisible = styled.div<ISizeProps>`
    position: absolute;
    right: 1.5rem;
    bottom: 0rem;
    width: ${(props) => props.width || "100%"};
    font-size: 2.5rem;
    color: white;
`

const mnemonic = ["index", "salmon", "victory", "noise", "lava", "zebra", "pudding", "regular", "acoustic", "rule", "forget", "must"]

export const Mnemonic = () => {
    const [visible, isVisible] = useState(false)
    
    return(
        <MnemonicBoxWrap height="15%">
            <MnemonicBox width="85%" height="80%">
                <MnemonicContent blur={'0'}>
                    {mnemonic.join(' ')}
                </MnemonicContent>
                <MnemonicVisible width="2.5rem">
                    <Icon icon="mdi:eye-off" hFlip={true} />
                    <Icon icon="heroicons:eye-solid" hFlip={true} />
                </MnemonicVisible>
            </MnemonicBox>
        </MnemonicBoxWrap>
    )
}
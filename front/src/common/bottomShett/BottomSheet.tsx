import { CloseBtn } from "@components/CloseBtn"
import { Wrap, Btn, BottomSheetWrap, BtnWrap, MyAccountWrapper } from "@common/bottomShett/styled/index"
import { useState } from "react"
import QRCodeGenerator from "@components/QR/QrCode"
import { CopyButton } from '@components/CopyButton';

const Wrapper = () => {
    return(
        <>
            <BtnWrap><CloseBtn/></BtnWrap>
        </>
    )
}

export const BottomSheet = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSheet = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Wrap>
                <Btn onClick={toggleSheet}>Toggle Sheet</Btn>
                {isOpen ?    
                    <BottomSheetWrap>
                        <Wrapper/>
                        <QRCodeGenerator/>
                        <MyAccountWrapper>
                            0x4922349j3j4k5jo35m
                        <CopyButton copyContent={""}/>
                        </MyAccountWrapper>
                    </BottomSheetWrap> : <></>}
            </Wrap>
        </>
    );
}


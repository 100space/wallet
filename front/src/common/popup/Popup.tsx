import { CloseBtn } from "@components/CloseBtn"
import { Wrap, Btn, BottomSheetWrap, BtnWrap } from "@common/popup/styled/index"
import { useState } from "react"

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
                    </BottomSheetWrap> : <></>}
            </Wrap>
        </>
    );
}


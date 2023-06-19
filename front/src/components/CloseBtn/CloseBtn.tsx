import { BtnWrap } from "./styled/CloseBtn.styled"
import { Icon } from '@iconify/react';

export const CloseBtn = () => {

    return(
        <>
            <BtnWrap>
                <Icon icon="mi:close" />
                닫기
            </BtnWrap>
        </>
    )
}
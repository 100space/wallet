import { ICoinRow, ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinRowNameWrap = styled.div<ISizeProps>`
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "4.8rem"};
    background-color: red;
`

export const CoinRowName = ({ width }: ICoinRow) => {
    return(
        <CoinRowNameWrap width={width}>
        </CoinRowNameWrap>
    )
}
import { FlexCenter } from "@styled/index"
import styled from "styled-components"

export const HambugWrap = styled.div`
    width: 7rem;
    height: 7rem;
    margin: 0 auto;
    ${FlexCenter}
`
export const HambugItem = styled.span`
    display: block;
    width: 80%;
    height: 10%;
    border-radius: 4rem;
    margin: 0 auto;
    background: #e3e3e3;
    & + & {
        margin-top: 1rem;
    }
`

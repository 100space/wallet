import { FlexCenter } from "@styled/index"
import styled from "styled-components"

export const QrWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const QrWrap = styled.div`
    /* width: 18rem; */
    /* height: 18rem; */
    display: flex;
    padding: 3%;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    border-radius: 1rem;
`
export const QrScan = styled.div`
    width: 90%;
    height: 80%;
    position: absolute;
    top: calc(50% - 40%);
    ${FlexCenter}
    z-index: 100;
    & > .cancleQr {
    }
`
export const BlurWrap = styled.div`
    width: 100%;
    height: 100%;
    filter: blur(10rem);
    position: absolute;
    backdrop-filter: blur(1rem);
    z-index: 50;
`

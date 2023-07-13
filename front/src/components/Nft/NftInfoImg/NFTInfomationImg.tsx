import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NFTInfomationImgWrap = styled.div<ISizeProps>`
    position: relative;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    border-radius: 1.6rem;
`

export const NFTINfomationImage = styled.img<ISizeProps>`
    position: absolute;
    width: auto;
    height: ${({ height }) => height || "100%"};
    border-radius: 1.6rem;
`

export const NFTInfomationImg = () => {
    return (
        <NFTInfomationImgWrap height={"60%"}>
            <NFTINfomationImage src="https://mblogthumb-phinf.pstatic.net/20150201_17/dahong02_1422800518504l5WCI_GIF/%BF%A1%BA%F1%C3%F2-%B8%C5%C1%FA.gif?type=w420" />
        </NFTInfomationImgWrap>
    )
}
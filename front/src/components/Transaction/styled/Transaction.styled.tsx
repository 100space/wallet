import { SizePropsStyled } from "@styled/index"
import { ISizeProps, IonClickProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const TransactionRowContent = styled.div<ISizeProps>`
    ${SizePropsStyled};
`

export const RowContentsWraps = styled.div<IonClickProps>`
    ${SizePropsStyled};
    ${({ open }) => (open === "on" ? "display: flex;" : "display: none;")}
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
    & > div:nth-child(2) > div {
        line-height: ${({ height }) => height && typeof height === "string" && parseFloat(height) / 2 + "rem"};
    }
`
export const TransactionImgWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    display: flex;
    flex-direction: column;
    align-items: center;

    & > svg {
        font-size: 3rem;
    }

    & > svg,
    & > div {
        color: ${({ color }) => color};
    }

    & > div {
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export const TransactionStatus = styled.div<ISizeProps>``

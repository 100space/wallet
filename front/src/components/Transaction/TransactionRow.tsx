
import { RowContent, RowContentWrap, RowContentsWrap } from "@components/Nft/NftRow/styled/NftRow.styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { ITransaction } from "@utils/interFace/transaction.interface"
import { styled } from "styled-components"


export const TransactionImgWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    display: flex;
    flex-direction: column;
    align-items: center;

    & > svg {
        font-size: 3rem;
    }

    & > svg, & > div {
        color: ${({ color }) => color };
    }

    & > div {
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export const TransactionStatus = styled.div<ISizeProps>``

export const TransactionRowContent = styled.div<ISizeProps>`
    ${SizePropsStyled};
`

export const TransactionImage = () => {

    const status = "receiver"

    return(
        <TransactionImgWrap width={"4.8rem"} color={ status === "receiver" ? "#00d17f" : "#e84562"}>
            <Icon icon={"iconoir:arrow-bl-circle"} />
            <TransactionStatus>
                receive
            </TransactionStatus>
        </TransactionImgWrap>
    )
}

export const RowContentsWraps = styled.div<ISizeProps>`
    ${SizePropsStyled}; 
    display: flex;
    background-color: blue;
    padding: 0.5rem;
    box-sizing: border-box;

    & > div:nth-child(2) > div {
        line-height: ${({ height }) => (height && typeof height === "string") && parseFloat(height) / 2 + 'rem'};
    }
`

export const TransactionRow = (props: { txInfo: ITransaction}) => {
    const [modeState, setChange] = useGetMode()

    return(
        <RowContentsWraps width={"28rem"} height={"5.6rem"}>
            <TransactionImage />
            <div>
                <RowContentWrap height={'50%'} mode={modeState.mode}>
                    <RowContent>
                        {(props.txInfo.status === "receiver") ? "발신자" : "수신자"}: {props.txInfo.opponent.substring(0, 6) + '...' + props.txInfo.opponent.substring(36, 40)}
                    </RowContent>
                    <RowContent>
                        - or + {props.txInfo.amounts[1].amount} {props.txInfo.amounts[1].currency}
                    </RowContent>
                </RowContentWrap>

                <RowContentWrap height={'50%'} mode={modeState.mode}>
                    <RowContent>
                        거래일시: {props.txInfo.timestamp}
                    </RowContent>
                    <RowContent>
                    - or + {props.txInfo.amounts[0].currency} {props.txInfo.amounts[0].amount} 
                    </RowContent>
                </RowContentWrap>
            </div>
        </RowContentsWraps>
    )
}
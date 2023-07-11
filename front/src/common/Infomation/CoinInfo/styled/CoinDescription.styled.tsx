import { useGetMode } from "@hooks/useMode"
import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinDescriptionWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding: 2rem;
`

export const CoinDescriptionSubject = styled.header<ISizeProps>`
    margin: 1rem 0;
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({mode, theme}) => mode && theme[mode].text};
`

export const CoinDescriptionContent = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding: 1rem 2rem 5rem;
    /* background-color: ${({ mode, theme}) => mode && theme[mode].descripBg}; */
    font-size: 1.4rem;
    color: ${({mode, theme}) => mode && theme[mode].text};
    border-radius: 1rem;
`

export const CoinDescription = ( props : {description: string, name: string}) => {
    const [modeState, setChange] = useGetMode()

    return(
        <CoinDescriptionWrap>
            <CoinDescriptionSubject mode={modeState.mode}>
                About {props.name} ?
            </CoinDescriptionSubject>
            <CoinDescriptionContent mode={modeState.mode}>
                {props.description}
            </CoinDescriptionContent>
        </CoinDescriptionWrap>
    )
}
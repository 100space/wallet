import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled, keyframes } from "styled-components"

export const CategoryWrap = styled.div<ISizeProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    &:hover, &:hover > div {
        color: ${({ mode, theme }) => mode && theme[mode].bgBtn};
        background-color: ${({ mode, theme }) => mode && theme[mode].text};
    }

    & > div {
        margin: 0 2rem;
        font-weight: 700;
        font-size: ${({ height }) => height};
        line-height: ${({ height }) => height};
        color: ${({ mode, theme }) => mode && theme[mode].text};
    }
`

export const CategorySubject = styled.div<ISizeProps>`
`

export const CategoryArrow = styled.div<ISizeProps>`
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;

    &:hover {
        color: ${({ mode, theme }) => mode && theme[mode].bgBtn};
        background-color: ${({ mode, theme }) => mode && theme[mode].text};
    }
`

export const Category = (props: { category: string }) => {
    const [modeState, setModeState] = useGetMode()
    return (
        <CategoryWrap mode={modeState.mode} height={"2.4rem"}>
            <CategorySubject>
                {props.category}
            </CategorySubject>
            <CategoryArrow mode={modeState.mode}>
                <Icon icon={"ep:arrow-up-bold"} rotate={1} />
            </CategoryArrow>
        </CategoryWrap>
    )
}
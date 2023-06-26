import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { CategoryWrap, CategorySubject, CategoryArrow } from "./styled/Category.styled"

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
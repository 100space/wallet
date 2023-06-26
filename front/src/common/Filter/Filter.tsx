import { FilterBtnWrap, FilterBtn, FilterWrap } from "./styled"
import { MouseEvent, useState } from "react"
import { useGetMode } from "@hooks/useMode"



export const Filter = (props: { filterList: string[] }) => {
    const [selected, setSelected] = useState<boolean[]>(props.filterList.map((v, index) => {
        if (index === 0) return true
        return false
    }))
    const [modeState, setModeState] = useGetMode()

    const handleSelectedBtn = (e: MouseEvent, index: number) => {
        e.preventDefault();

        const updatedSelected = selected.map((v, idx) => (idx === index ? !v : false));

        setSelected(updatedSelected);
    }

    const filterBtnList = (filterList: string[]) => {
        return filterList.map((v, index) => {
            return (
                <FilterBtnWrap key={index}>
                    <FilterBtn selected={selected[index] === true} mode={modeState.mode} onClick={(e: MouseEvent) => handleSelectedBtn(e, index)}>
                        {v}
                    </FilterBtn>
                </FilterBtnWrap>
            )
        })
    }

    return (
        <FilterWrap>
            {filterBtnList(props.filterList)}
        </FilterWrap>
    )
}
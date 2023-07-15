import { FilterBtnWrap, FilterBtn, FilterWrap } from "./styled"
import { MouseEvent, useState } from "react"
import { useGetMode } from "@hooks/useMode"
import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"

export const Filter = ({ selected, setSelected }: { selected: boolean[]; setSelected: any }) => {
    const { mode } = useRecoilValue(ModeState)

    const handleSelectedBtn = (e: MouseEvent, index: number) => {
        e.preventDefault()
        const updatedSelected = selected.map((v, idx) => (idx === index ? !v : false))
        setSelected(updatedSelected)
    }

    const filterBtnList = (selected: boolean[]) => {
        return selected.map((v, index) => {
            return (
                <FilterBtnWrap key={index}>
                    <FilterBtn
                        selected={selected[index] === true}
                        mode={mode}
                        onClick={(e: MouseEvent) => handleSelectedBtn(e, index)}
                    >
                        {index === 0 ? "랭킹순" : index === 1 ? "가격순" : "이름순"}
                    </FilterBtn>
                </FilterBtnWrap>
            )
        })
    }

    return <FilterWrap>{filterBtnList(selected)}</FilterWrap>
}

import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { MouseEvent } from "react"
import { styled } from "styled-components"
import { AssetsListHeaderTab, AssetsListHeaderTabs, AssetsListHeaderWrap } from "./styled/Header.styled"

interface IAssetsListHeader {
    onClick: (e: MouseEvent, index: number) => void
    selected: boolean[]
}

export const AssetsListHeader = ({ onClick, selected }: IAssetsListHeader) => {
    const [modeState, setModeState] = useGetMode()

    const assetsListHeaderTabs = (tabSubject: string[]) => {
        return tabSubject.map((v, index) => {
            return (
                <AssetsListHeaderTab
                    key={index}
                    selected={selected[index]}
                    mode={modeState.mode}
                    onClick={(e: MouseEvent) => onClick(e, index)}
                >
                    {v}
                </AssetsListHeaderTab>
            )
        })
    }

    return (
        <AssetsListHeaderWrap onClick={() => onClick} height={"4.8rem"}>
            <AssetsListHeaderTabs mode={modeState.mode}>
                {assetsListHeaderTabs(["Assets", "NFTs"])}
            </AssetsListHeaderTabs>
            <AssetsListHeaderTabs mode={modeState.mode}>
                {selected[0] === true ? (
                    <></>
                ) : (
                    <>
                        <div>컬렉션 목록</div>
                        <Icon icon={"ep:arrow-up-bold"} rotate={1} />
                    </>
                )}
            </AssetsListHeaderTabs>
        </AssetsListHeaderWrap>
    )
}

import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ISelectedBtn, ISizeProps } from "@utils/interFace/styled.interface"
import { MouseEvent } from "react"
import { styled } from "styled-components"

export const AssetsListHeaderWrap = styled.div<ISizeProps>`
    height: ${({ height }) => height || "100%"};
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

export const AssetsListHeaderTabs = styled.div<ISizeProps>`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div,
    svg {
        font-weight: 700;
        font-size: 1.6rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }

    & > div {
        margin-right: 1rem;
        border-bottom: 0.2rem solid #3fba3f;

    }

    & > svg {
        font-size: 2rem;
    }
`

export const AssetsListHeaderTab = styled.div<ISelectedBtn>`
    margin-right: 1rem;
    color: ${({ mode, theme, selected }) => (selected && "#47a247") || (mode && theme[mode].text)} !important;
    ${({ selected }) => selected && "border-bottom: 0.2rem solid #47a247"};
`

interface IAssetsListHeader {
    onClick: (e: MouseEvent, index: number) => void
    selected: boolean[]
}

export const AssetsListHeader = ({ onClick, selected }: IAssetsListHeader) => {
    const [modeState, setModeState] = useGetMode()

    const assetsListHeaderTabs = (tabSubject: string[]) => {
        return tabSubject.map((v, index) => {
            return <AssetsListHeaderTab
                key={index}
                selected={selected[index]}
                mode={modeState.mode}
                onClick={(e: MouseEvent) => onClick(e, index)}
            >
                {v}
            </AssetsListHeaderTab>
        })
    }

    return (
        <AssetsListHeaderWrap onClick={() => onClick} height={"4.8rem"}>
            <AssetsListHeaderTabs mode={modeState.mode}>
                {assetsListHeaderTabs(["Assets", "NFTs"])}
            </AssetsListHeaderTabs>
            <AssetsListHeaderTabs mode={modeState.mode}>
                {selected[0] === true ?
                    <></>
                    :
                    <>
                        <div>
                            컬렉션 목록
                        </div>
                        <Icon icon={"ep:arrow-up-bold"} rotate={1} />
                    </>
                }
            </AssetsListHeaderTabs>
        </AssetsListHeaderWrap>
    )
}

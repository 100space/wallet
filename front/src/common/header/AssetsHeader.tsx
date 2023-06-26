import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { MouseEvent } from "react"
import { styled } from "styled-components"

export const AssetsListHeaderWrap = styled.div<ISizeProps>`
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

export const AssetsListHeaderTabs = styled.div<ISizeProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div, svg {
        font-weight: 700;
        font-size: 1.6rem;
        color: ${({theme, mode}) => mode && theme[mode].text};
    }

    & > div {
        margin-right: 1rem;
        border-bottom: 2px solid #3fba3f;
    }

    & > svg {
        font-size: 3rem;
    }
`

interface IAssetsListHeader {
    onClick: (e: MouseEvent) => void
    selected: boolean[]
}

export const AssetsListHeader = ({ onClick, selected }: IAssetsListHeader) => {
    const [modeState, setModeState] = useGetMode()

    return (
        <AssetsListHeaderWrap onClick={onClick}>
            <AssetsListHeaderTabs mode={modeState.mode}>
                <div>
                    Assets
                </div>
                <div>
                    NFTs
                </div>
            </AssetsListHeaderTabs>
            <AssetsListHeaderTabs mode={modeState.mode}>
                <div>
                    컬렉션 목록
                </div>
                <Icon icon={"ep:arrow-up-bold"} rotate={1}/>
            </AssetsListHeaderTabs>
        </AssetsListHeaderWrap>
    )
}
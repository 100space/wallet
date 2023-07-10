import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { MouseEvent, useState } from "react"
import { NFTSearchInput, NFTSearchWrap } from "./styled/NFTSearch.styled"

export const NFTSearch = () => {
    const [modeState, setModeState] = useGetMode()
    const [selected, setSelected] = useState(false)

    const handelClickSearchIcon = (e: MouseEvent) => {
        setSelected(!selected)
    }

    return (
        <NFTSearchWrap mode={modeState.mode}>
            {/* <NFTSearchInput placeholder="NFT를 검색해주세요" mode={modeState.mode} /> */}
            <Icon icon={"ic:round-search"} onClick={handelClickSearchIcon} />
        </NFTSearchWrap>
    )
}

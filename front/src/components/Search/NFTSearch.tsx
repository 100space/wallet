import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { ChangeEvent, MouseEvent, useRef, useState } from "react"
import { NFTSearchInput, NFTSearchWrap } from "./styled/NFTSearch.styled"
import { useNavigate } from "react-router"

interface INFTSearch {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const NFTSearch = ({ search, setSearch }: INFTSearch) => {
    const [modeState, setModeState] = useGetMode()
    const [cancel, setCancel] = useState(false)
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handelClickSearchIcon = (e: MouseEvent) => {
        setSearch(value)
        setCancel(!cancel)
        navigate(`/market?search=${value}`)
    }

    const handleClickCancel = (e: MouseEvent) => {
        setCancel(!cancel)
        setSearch("")
        navigate("/market")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <NFTSearchWrap mode={modeState.mode}>
            <NFTSearchInput placeholder="NFT를 검색해주세요" mode={modeState.mode} onChange={handleChange} ref={inputRef} />
            {
                !cancel
                    ?
                    <Icon icon={"ic:round-search"} onClick={handelClickSearchIcon} />
                    :
                    <Icon icon="ic:outline-cancel" onClick={handleClickCancel} />
            }
        </NFTSearchWrap>
    )
}

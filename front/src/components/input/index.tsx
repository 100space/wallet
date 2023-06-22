import { MouseEvent, useState } from "react"
import search from "@img/search.png"
import { HideIcon, InputElement, InputWrap } from "./styled"
import { IPlaceTypeSize } from "@utils/interFace/styled.interface"
import { Icon } from "@iconify/react"
import { useGetMode } from "@hooks/useMode"

export const InputComp: React.FC<IPlaceTypeSize> = ({ type, placeholder, height, width }) => {
    const [focusmode, setFocus] = useState("off")
    const [isVisible, setVisible] = useState(false)
    const [isvalue, setIsValue] = useState("")
    const [modeState, setChange] = useGetMode()
    const handleVisible = (e: MouseEvent<HTMLDivElement>) => {
        setVisible(!isVisible)
    }
    return (
        <>
            <InputWrap focusmode={focusmode} height={height} width={width} type={type}>
                <InputElement
                    type={type === "text" || type === "" ? "text" : isVisible ? "text" : "password"}
                    height={height}
                    width={width}
                    placeholder={placeholder}
                    onFocus={() => setFocus("on")}
                    onBlur={(e) => {
                        setFocus("off")
                        setIsValue(e.target.value)
                    }}
                />
                {type === "password" && (
                    <HideIcon width="3rem" onClick={handleVisible} mode={modeState.mode}>
                        {isVisible ? (
                            <Icon icon="mdi:eye-off" hFlip={true} />
                        ) : (
                            <Icon icon="heroicons:eye-solid" hFlip={true} />
                        )}
                    </HideIcon>
                )}
                {type === "text" && (
                    <HideIcon width="3rem" mode={modeState.mode}>
                        <Icon icon="codicon:blank" />
                    </HideIcon>
                )}
                {type === "search" && <img src={search} alt="" />}
            </InputWrap>
        </>
    )
}

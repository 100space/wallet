import { MouseEvent, useState } from "react"
import search from "@img/search.png"
import { HideIcon, InputElement, InputWrap } from "./styled"
import { IPlaceTypeSize } from "@utils/interFace/styled.interface"
import { Icon } from "@iconify/react"
import { useGetMode } from "@hooks/useMode"

export const InputComp: React.FC<IPlaceTypeSize> = ({ type, placeholder, height, width, name }) => {
    const [focusmode, setFocus] = useState("off")
    const [isVisible, setVisible] = useState(false)
    const [isvalue, setIsValue] = useState("")
    const [mode, setChange] = useGetMode()
    const handleVisible = (e: MouseEvent<HTMLDivElement>) => {
        setVisible(!isVisible)
    }
    return (
        <>
            <InputWrap focusmode={focusmode} height={height} width={width} type={type}>
                <InputElement
                    type={type === "mnemonic" ? "text" : isVisible ? "text" : "password"}
                    height={height}
                    width={width}
                    name={name}
                    placeholder={placeholder}
                    onFocus={() => setFocus("on")}
                    onBlur={(e) => {
                        setFocus("off")
                        setIsValue(e.target.value)
                    }}
                />
                {type === "password" && (
                    <HideIcon width="3rem" onClick={handleVisible} mode={mode}>
                        {isVisible ? (
                            <Icon icon="mdi:eye-off" hFlip={true} />
                        ) : (
                            <Icon icon="heroicons:eye-solid" hFlip={true} />
                        )}
                    </HideIcon>
                )}
                {type === "search" && <img src={search} alt="" />}
            </InputWrap>
        </>
    )
}

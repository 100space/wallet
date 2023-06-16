import { IinputComp } from "@utils/interFace/index"
import { useState } from "react"
import hide from "@img/hideIcon.png"
import search from "@img/search.png"
import { InputElement, InputWrap } from "./styled"

export const InputComp: React.FC<IinputComp> = ({ type, placeholder, height, width }) => {
    const [focusmode, setFocus] = useState("off")
    return (
        <>
            <InputWrap focusmode={focusmode} height={height} type={type} width={width}>
                <InputElement
                    type={type}
                    height={height}
                    width={width}
                    placeholder={placeholder}
                    onFocus={() => setFocus("on")}
                    onBlur={() => setFocus("off")}
                />
                {type === "password" && <img src={hide} alt="" />}
                {type === "search" && <img src={search} alt="" />}
            </InputWrap>
        </>
    )
}

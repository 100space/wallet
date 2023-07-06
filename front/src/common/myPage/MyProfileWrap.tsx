import { useRef, useState } from "react"
import styled from "styled-components"
import { MyProfile } from "./styled"

export const MyProfileWrap = () => {
    const [Image, setImage] = useState("")
    const fileInput = useRef(null)

    return(
        <>
            <MyProfile src="image" type="file"/>
        </>
    )
}
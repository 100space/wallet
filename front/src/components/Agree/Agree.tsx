import { AgreeWrap, AgreeCheckBoxWrap, AgreeCheckBox, AgreeContentWrap, AgreeContent } from "./styled/Agree.styled"
import { ChangeEvent, useState } from "react"

const data = {
    content: "복구 문구(니모닉)을 잃어버리면 지갑에 있는 모든 암호화폐를 잃어버리는 것을 이해했습니다.",
}

export const Agree = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked)
    }

    return (
        <AgreeWrap width="100%" height={"5%"}>
            <AgreeCheckBoxWrap width="10%">
                <AgreeCheckBox width="60%" height="auto" type="checkbox" onChange={handleCheckboxChange} />
            </AgreeCheckBoxWrap>
            <AgreeContentWrap>
                <AgreeContent>{data.content}</AgreeContent>
            </AgreeContentWrap>
        </AgreeWrap>
    )
}

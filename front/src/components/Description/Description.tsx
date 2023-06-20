import { SubInfo, ConInfo } from "./styled/Description.styled"
import { Idescription } from "@utils/interFace/styled.interface"

export const DescripList = [
    {subject: "니모닉을 기억해주세요",content: "니모닉 키를 이용해 개인키를 만듭니다. 니모닉을 저장하거나, 적어두세요. 누구에게도 니모닉을 노출시키지 마십시오"},
    {subject: "기억한 니모닉을 입력해주세요",content: "기억한 니모닉을 순서대로 빈칸에 입력해주세요"},
    {subject: "지갑 생성을 완료했습니다!", content:""},
    {subject: "비밀번호를 입력해주세요", content: "사용할 계정의 비밀번호를 입력해주세요. 단, 비밀번호의 경우 계정을 복구할 경우 초기화됩니다."},
]

export const Description = () => {
    const renderDescription = (infoArray: Idescription[], pages: number) => {
        return(
            infoArray.map((v, idx) => {
                if(pages === idx + 1) return(
                    <>
                        <SubInfo>
                            {v.subject}
                        </SubInfo>
                        <ConInfo>
                            {v.content}
                        </ConInfo>
                    </>
                )

                return <></>
            })
        )
    }
    
    return(
        <>
            {renderDescription(DescripList, 3)}
        </>
    )
}

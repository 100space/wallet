import { SubInfo, ConInfo, DescriptWrap } from "./styled"
import { IDescripList } from "@utils/interFace/core"
import { useGetMode } from "@hooks/useMode"

const DescripList: IDescripList = {
    step1: {
        subject: "니모닉을 기억해주세요",
        content:
            "니모닉 키를 이용해 개인키를 만듭니다. 니모닉을 저장하거나, 적어두세요. 누구에게도 니모닉을 노출시키지 마십시오",
    },
    step2: {
        subject: "기억한 니모닉을 입력해주세요",
        content: "기억한 니모닉을 순서대로 빈칸에 입력해주세요",
    },
    step3: {
        subject: "비밀번호를 입력해주세요",
        content: "사용할 계정의 비밀번호를 입력해주세요. 단, 비밀번호를 잊은 경우 복구가 불가능하고 초기화됩니다.",
    },
    step4: {
        subject: "지갑 생성을 완료했습니다!",
        content: "NFTin으로 암호화폐와 NFT를 관리해보세요!",
    },
}

export const Description = ({ step }: { step: string; onClick?: () => void }) => {
    const [modeState, setChange] = useGetMode()
    return (
        <DescriptWrap mode={modeState.mode}>
            <SubInfo>{DescripList[step].subject}</SubInfo>
            <ConInfo>{DescripList[step].content}</ConInfo>
        </DescriptWrap>
    )
}

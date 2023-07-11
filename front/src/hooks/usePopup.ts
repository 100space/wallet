import { IsPopUp } from "@utils/localStorage"
import { useRecoilState } from "recoil"

export const usePopup = () => {
    const [{ isOpen, contents }, setIsPopUp] = useRecoilState(IsPopUp)

    const setPopUp = (content: string) => {
        if (content === "계정 불러오기") {
            const check = { isOpen: true, contents: content }
            return setIsPopUp(check)
        } else {
            const check = isOpen === true ? { isOpen: false, contents: "" } : { isOpen: true, contents: content }
            return setIsPopUp(check)
        }
    }

    return [{ isOpen, contents }, setPopUp] as const
}

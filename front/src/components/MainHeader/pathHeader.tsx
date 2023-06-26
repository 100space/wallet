import { ModeState } from "@utils/localStorage"
import { useLocation } from "react-router"
import { useRecoilValue } from "recoil"
import { HeaderSubJect } from "./styled"

export const PathHeader = () => {
    const pathName = useLocation().pathname
    const { mode } = useRecoilValue(ModeState)
    const checkPathName =
        pathName.indexOf("/setting") >= 0
            ? "setting"
            : pathName.indexOf("/market") >= 0
            ? "market"
            : pathName.indexOf("/trends") >= 0
            ? "trends"
            : "main"
    switch (checkPathName) {
        case "setting":
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    Settings
                </HeaderSubJect>
            )
        case "market":
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    NFT Market
                </HeaderSubJect>
            )
        case "trends":
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    Coin Trend & Explore
                </HeaderSubJect>
            )
        default:
            return (
                <HeaderSubJect fontSize="2rem" mode={mode}>
                    Account 1
                </HeaderSubJect>
            )
    }
}

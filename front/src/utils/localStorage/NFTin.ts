import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
    key: "NFTin",
    storage: localStorage,
})

export const IsSideBar = atom({
    key: "isSideBar",
    default: false,
})
export const IsPopUp = atom({
    key: "isPopUp",
    default: { isOpen: false, contents: "" },
})
export const ModeState = atom({
    key: "initState",
    default: { isLogin: false, mode: "darkMode" },
    effects_UNSTABLE: [persistAtom],
})
export const MyProfile = atom({
    key: "myProfile",
    default: { myMnemonic: "", password: "", nickName: "" },
    effects_UNSTABLE: [persistAtom],
})
export const MyAccounts = atom({
    key: "myAccounts",
    default: { privateKey: "", publicKey: "", address: "" },
    effects_UNSTABLE: [persistAtom],
})
export const InitMode = atom({
    key: "loginMode",
    default: { initMode: "", initStep: "" },
    effects_UNSTABLE: [persistAtom],
})

export const IsCheck = atom({
    key: "isCheck",
    default: { step1: false, step2: false, step3: false },
    effects_UNSTABLE: [persistAtom],
})
export const ScanOpen = atom({
    key: "scanOpen",
    default: false,
})
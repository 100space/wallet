import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export const ModeState = atom({
    key: "initState",
    default: { isLogin: false, mode: "darkMode" },
    effects_UNSTABLE: [persistAtom],
})

export const InitMode = atom({
    key: "loginMode",
    default: { initMode: "", initStep: "" },
    effects_UNSTABLE: [persistAtom],
})

export const IsCheck = atom({
    key: "isCheck",
    default: { step1: false, step2: false },
    effects_UNSTABLE: [persistAtom],
})
export const MyAccount = atom({
    key: "myAccount",
    default: { myMnemonic: "", password: "" },
    effects_UNSTABLE: [persistAtom],
})

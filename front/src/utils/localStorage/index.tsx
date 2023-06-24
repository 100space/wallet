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
})

export const IsCheck = atom({
    key: "isCheck",
    default: { step1: false, step2: false, step3: false },
})
export const MyAccount = atom({
    key: "myAccount",
    default: { myMnemonic: "", password: "", nickName: "" },
    effects_UNSTABLE: [persistAtom],
})

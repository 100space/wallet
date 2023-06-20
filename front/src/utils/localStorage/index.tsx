import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export const ModeState = atom({
    key: "initState",
    default: { isLogin: false, mode: "darkMode" },
    effects_UNSTABLE: [persistAtom],
})

export const InitMode = atom({
    key: "initMode",
    default: { initMode: "", initStep: "" },
    effects_UNSTABLE: [persistAtom],
})

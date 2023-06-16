import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export const InitState = atom({
    key: "initState",
    default: { isLogin: false },
    effects_UNSTABLE: [persistAtom],
})

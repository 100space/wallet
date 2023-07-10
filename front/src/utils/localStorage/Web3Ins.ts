import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom: web3Ins } = recoilPersist({
    key: "Web3Ins",
    storage: localStorage,
})

export const Web3Instance = atom({
    key: "web3Instance",
    default: "",
    effects_UNSTABLE: [web3Ins],
})

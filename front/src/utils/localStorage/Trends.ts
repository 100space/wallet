import { atom } from "recoil"

// const { persistAtom: web3Ins } = recoilPersist({
//     key: "Web3Ins",
//     storage: localStorage,
// })

export const TrendSort = atom({
    key: "trendSort",
    default: "rank",
    // effects_UNSTABLE: [web3Ins],
})
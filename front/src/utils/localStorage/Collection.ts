import { atom } from "recoil"

export const SelectedCollection = atom({
    key: "collection",
    default: {
        ca: "0x0000000000000000000000000000000000000000",
        name: ""
    },
    // effects_UNSTABLE: [web3Ins],
})
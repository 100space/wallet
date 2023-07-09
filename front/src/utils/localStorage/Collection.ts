import { atom } from "recoil"

export const SelectedNFTCa = atom({
    key: "collection",
    default: "0x0000000000000000000000000000000000000000",
    // effects_UNSTABLE: [web3Ins],
})
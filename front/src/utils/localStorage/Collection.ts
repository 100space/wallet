import { atom } from "recoil"

export const SelectedCollection = atom({
    key: "collection",
    default: {
        ca: "",
        name: ""
    },
    // effects_UNSTABLE: [web3Ins],
})

export const NFTByCollection = atom({
    key: "nftInfomation",
    default: {
        ca: "",
        tokenId: 0,
    }
})
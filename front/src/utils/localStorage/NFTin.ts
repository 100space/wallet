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
    default: { myMnemonic: "", password: "", nickName: "", image: "" },
    effects_UNSTABLE: [persistAtom],
})
export const MyAccounts = atom({
    key: "myAccounts",
    default: { privateKey: "", publicKey: "", address: "", alias: "", image: "" },
    effects_UNSTABLE: [persistAtom],
})
export const MyAccountsList = atom({
    key: "accountsList",
    default: [],
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

export const MyTokens = atom({
    key: "myTokens",
    default: [
        {
            tokenImg: "",
            assets: [
                { amount: 0, currency: "" },
                { amount: 0, currency: "" },
            ],
        },
    ],
    effects_UNSTABLE: [persistAtom],
})

export const MyInfo = atom({
    key: "myInfo",
    default: {
        polygon: {
            networks: { rpc: "https://polygon-mainnet.infura.io", chainId: 137, symbol: "MATIC" },
            tokens: [
                {
                    ca: "",
                    symbol: "MATIC",
                    decimal: 18,
                },
            ],
        },
        mumbai: {
            networks: { rpc: "https://polygon-mumbai.infura.io", chainId: 80001, symbol: "MATIC" },
            tokens: [
                {
                    ca: "",
                    symbol: "MATIC",
                    decimal: 18,
                },
            ],
        },
        arbitrum: {
            networks: { rpc: "https://arbitrum-goerli.infura.io", chainId: 421613, symbol: "AGOR" },
            tokens: [
                {
                    ca: "",
                    symbol: "AGOR",
                    decimal: 18,
                },
            ],
        },
    },
    effects_UNSTABLE: [persistAtom],
})

export const MyNetwork = atom({
    key: "myNetwork",
    default: "mumbai",
    effects_UNSTABLE: [persistAtom],
})

export const MyNFT = atom({
    key: "myNFT",
    default: [] as any,
    effects_UNSTABLE: [persistAtom],
})

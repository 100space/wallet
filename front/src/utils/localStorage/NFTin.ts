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
    default: { myMnemonic: "", password: "", nickName: "" },
    effects_UNSTABLE: [persistAtom],
})
export const MyAccounts = atom({
    key: "myAccounts",
    default: [{ privateKey: "", publicKey: "", address: "" }],
    effects_UNSTABLE: [persistAtom],
})
export const MyAccountsList = atom({
    key: "accountsList",
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export const AllMyAccounts = atom({
    key: "allMyAccounts",
    default: [{ privateKey: "", publicKey: "", address: "" }],
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
                    ca: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
                    symbol: "MATIC",
                    decimal: 18,
                    tokenImg: "",
                },
            ],
        },
        mumbai: {
            networks: { rpc: "https://polygon-mumbai.infura.io", chainId: 80001, symbol: "MATIC" },
            tokens: [
                {
                    ca: "0x0000000000000000000000000000000000001010",
                    symbol: "MATIC",
                    decimal: 18,
                    tokenImg: "",
                },
                {
                    ca: "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1",
                    symbol: "DERC20",
                    decimal: 18,
                    tokenImg: "",
                },
            ],
        },
    },
})

export const MyNetwork = atom({
    key: "myNetwork",
    default: "mumbai",
})

export const MyNFT = atom({
    key: "myNFT",
    default: [
        {
            name: "",
            descrition: "",
            image: "",
            marketId: 0,
            owner: "",
            nftAddress: "",
            tokenId: 0,
            prices: [
                {
                    currency: "KRW",
                    price: 0,
                },
                {
                    currency: "MATIC",
                    price: 0,
                },
            ],
            isSoldOut: false,
        },
    ],
})

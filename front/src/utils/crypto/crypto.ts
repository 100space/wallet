import CryptoJS from "crypto-js"

export const CryptoMnemonic = (Mnemonic: string[]): string => {
    const key = Mnemonic[Mnemonic.length - 1]
    const MnemonicStr = JSON.stringify(Mnemonic)
    const encryptMnemonic = CryptoJS.AES.encrypt(MnemonicStr, key).toString()
    return encryptMnemonic
}
export const CryptoPassword = (password: string): string => {
    const encryptPassword = CryptoJS.SHA256(password).toString()
    return encryptPassword
}

// export const CryptoPassword = (password: string, nickName: string): string => {
//     const encryptPassword = CryptoJS.AES.encrypt(password, nickName).toString()
//     return encryptPassword
// }

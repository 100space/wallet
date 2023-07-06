import CryptoJS from "crypto-js"

export const CryptoMnemonic = (Mnemonic: string[]): string => {
    const MnemonicStr = JSON.stringify(Mnemonic)
    const encryptMnemonic = CryptoJS.SHA256(MnemonicStr).toString()
    return encryptMnemonic
}
export const CryptoPassword = (password: string): string => {
    const encryptPassword = CryptoJS.SHA256(password).toString()
    return encryptPassword
}

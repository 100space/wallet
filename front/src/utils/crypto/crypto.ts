import CryptoJS from "crypto-js"

export const CryptoMnemonic = (Mnemonic: string[]): string => {
    const key = Mnemonic[Mnemonic.length - 1]
    const MnemonicStr = JSON.stringify(Mnemonic)
    const encryptMnemonic = CryptoJS.AES.encrypt(MnemonicStr, key).toString()
    return encryptMnemonic
}

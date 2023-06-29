import { useState, useEffect } from "react"
import Web3 from "web3"

const useMyWallet = () => {
    //     const [myWallet, setMyWallet] = useState<MyWallet | null>(null)
    //     const [web3, setWeb3] = useState(null)
    //     useEffect(() => {
    //         const initializeWallet = async () => {
    //             //     const walletInstance = new MyWallet()
    //             //     setMyWallet(walletInstance)
    //             // }
    //             // console.log(window.ethereum)
    //             // if (window.ethereum) {
    //             //     const web3Instance = new Web3(window.ethereum)
    //             //     setWeb3(web3Instance)
    //             // } else {
    //             //     console.error("No ethereum provider found")
    //             // }
    //         }
    //         initializeWallet()
    //     }, [])
    //     const enable = async (): Promise<void> => {
    //         if (myWallet) {
    //             await myWallet.enable()
    //         }
    //     }
    //     const sendTransaction = async (transactionObject: any): Promise<void> => {
    //         if (myWallet) {
    //             await myWallet.sendTransaction(transactionObject)
    //         }
    //     }
    //     const getAccounts = async (): Promise<string[]> => {
    //         if (myWallet) {
    //             return await myWallet.getAccounts()
    //         }
    //         return []
    //     }
    //     const sign = async (message: string): Promise<string | null> => {
    //         if (myWallet) {
    //             return await myWallet.sign(message)
    //         }
    //         return null
    //     }
    //     const personal_sign = async (message: string, account: string): Promise<string | null> => {
    //         if (myWallet) {
    //             return await myWallet.personal_sign(message, account)
    //         }
    //         return null
    //     }
    //     // 추가 월렛 기능 및 로직
    //     return {
    //         myWallet,
    //         enable,
    //         sendTransaction,
    //         getAccounts,
    //         sign,
    //         personal_sign,
    //         // 추가 월렛 기능 및 로직을 반환
    //     }
}

export default useMyWallet

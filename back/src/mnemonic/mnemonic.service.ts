import { Injectable } from '@nestjs/common';
import { ethers } from "ethers";
import * as bip39 from "bip39"

@Injectable()
export class MnemonicService {
  createMnemonic() {
    const mnemonicWord = ethers.Wallet.createRandom().mnemonic.phrase;
    if (!bip39.validateMnemonic(mnemonicWord)) throw new Error('니모닉 단어가 올바르지 않습니다.')

    const mnemonic = mnemonicWord.split(' ')
    if (mnemonic.length !== 12) throw new Error('니모닉 단어의 갯수가 올바르지 않습니다.')

    return { mnemonic }
  }

  createAccount(mnemonic: string[]) {
    if (mnemonic.length !== 12) throw new Error('니모닉 단어의 갯수가 올바르지 않습니다.')
    const seed = mnemonic.join(' ')
    const { privateKey, publicKey, address } = ethers.Wallet.fromPhrase(seed)
    if (!ethers.isAddress(address)) throw new Error('주소가 올바르지 않습니다.')

    return { privateKey, publicKey, address }
  }
}

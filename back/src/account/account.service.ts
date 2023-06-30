import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import * as bip39 from "bip39";
import { ethers } from "ethers";
import { IAccount, Mnemonic } from "src/interface/mnemonic.interface";
import { PostMnemonicDTO } from "./dto/post-mnemonic.dto";

@Injectable()
export class AccountService {
  constructor(){}
  createMnemonic(): { mnemonic: Mnemonic } {
    const mnemonicWord = ethers.Wallet.createRandom().mnemonic.phrase;
    const mnemonic = mnemonicWord.split(' ')

    return { mnemonic }
}

createAccount(mnemonic: Mnemonic): PostMnemonicDTO {
    if (mnemonic.length !== 12) throw new Error('니모닉 단어의 갯수가 올바르지 않습니다.')

    const mnemonicWord = mnemonic.join(' ')
    if (!bip39.validateMnemonic(mnemonicWord)) throw new Error('니모닉 단어가 올바르지 않습니다.')

    const { privateKey, publicKey, address } = ethers.Wallet.fromPhrase(mnemonicWord)
    if (!ethers.isAddress(address)) throw new Error('주소가 올바르지 않습니다.')

    return { privateKey, publicKey, address }
}
}

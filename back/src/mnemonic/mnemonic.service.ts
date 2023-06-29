import { Injectable } from '@nestjs/common';
import * as bip39 from 'bip39';

@Injectable()
export class MnemonicService {
  createMnemonic() {
      const mnemonic = bip39.generateMnemonic().split(" ")
      if (mnemonic.length !== 12) throw new Error("니모닉 단어 갯수가 올바르지 않습니다.")
      return { mnemonic };
  }

  createAccount() {
  
  }
}

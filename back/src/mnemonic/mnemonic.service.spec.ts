import { Test, TestingModule } from '@nestjs/testing';
import { MnemonicService } from './mnemonic.service';
import { ethers } from "ethers";
import * as bip39 from "bip39"
import { type } from "os";

describe('MnemonicService', () => {
  let service: MnemonicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MnemonicService],
    }).compile();

    service = module.get<MnemonicService>(MnemonicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createMnemonic', () => {
    it('니모닉 단어가 생성되었는가?', () => {
      const { mnemonic } = service.createMnemonic()
      expect(mnemonic).toBeTruthy()
    })

    it('단어 갯수가 12개가 맞는가?', () => {
      const { mnemonic } = service.createMnemonic()
      expect(mnemonic).toHaveLength(12)
    })
    
    it('니모닉 단어가 유효한가?', () => {
      const { mnemonic } = service.createMnemonic()
      const mnemonicWords = mnemonic.join(' ')
      const validation = bip39.validateMnemonic(mnemonicWords)
      expect(validation).toBeTruthy()
    })
  })

  describe('createAccount', () => {
    it('니모닉으로 계정이 잘 생성되는가?', () => {
      const mnemonic = ["buddy", "syrup", "enrich", "speed", "more", "laptop", "winter", "potato", "cabbage", "report", "history", "right"]
      const wallet = service.createAccount(mnemonic)

      expect(wallet).toBeTruthy()
    })
  
    it('니모닉으로 생성된 계정의 타입이 올바른가?', () => {
      const mnemonic = ["buddy", "syrup", "enrich", "speed", "more", "laptop", "winter", "potato", "cabbage", "report", "history", "right"]
      const wallet = service.createAccount(mnemonic)

      type Wallet = {
        privateKey: string
        publicKey: string
        address: string
      }

      expect(wallet).toMatchObject<Wallet>
    })

    it('니모닉이 올바르지 않을 경우 에러를 발생시키는가?', () => {
      const mnemonic = ["buddy", "syrup", "enrich", "speed", "more", "laptop", "winter", "potato", "cabbage", "report", "history"]

      expect(() => service.createAccount(mnemonic)).toThrowError()
    })
  })
});
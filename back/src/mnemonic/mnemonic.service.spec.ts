import { Test, TestingModule } from '@nestjs/testing';
import { MnemonicService } from './mnemonic.service';
import * as bip39 from 'bip39';
import { hdkey } from 'ethereumjs-wallet'

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
    it('단어 갯수가 12개가 맞는가?', () => {
      const mnemonic = service.createMnemonic()
      expect(mnemonic).toHaveLength(12)
    })

    it('단어 갯수가 12개가 아닐 경우에 에러를 발생시키는가?', () => {
      const createMnemonic = () => {
        const mnemonic = bip39.generateMnemonic().split(" ").pop()
        if (mnemonic.length !== 12) throw new Error("니모닉 단어 갯수가 올바르지 않습니다.")
      }
      expect(() => createMnemonic()).toThrowError("니모닉 단어 갯수가 올바르지 않습니다.")
    })
  })

  describe('createAccount', () => {
    it('니모닉으로 계정이 잘 생성되는가?', async () => {
      const mnemonic = "buddy syrup enrich speed more laptop winter potato cabbage report history right"
      const seed = bip39.mnemonicToSeedSync(mnemonic)
      const rootkey = hdkey.fromMasterSeed(seed)
      console.log(rootkey.privateExtendedKey().toString('binary'))
      // console.log(rootkey.privateExtendedKey().toString('hex'))
      // console.log(bip39.validateMnemonic(mnemonic))
      // console.log(bip39.getDefaultWordlist())

    })
  })
});
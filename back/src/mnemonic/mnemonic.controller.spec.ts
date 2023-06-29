import { Test, TestingModule } from '@nestjs/testing';
import { MnemonicController } from './mnemonic.controller';
import { MnemonicService } from './mnemonic.service';

describe('MnemonicController', () => {
  let controller: MnemonicController;
  let service: MnemonicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MnemonicController],
      providers: [MnemonicService],
    }).compile();

    controller = module.get<MnemonicController>(MnemonicController);
    service = module.get<MnemonicService>(MnemonicService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call createMnemonic method of mnemonicService', () => {
    const createMnemonicSpy = jest.spyOn(service, 'createMnemonic');
    controller.createMnemonic();
    expect(createMnemonicSpy).toHaveBeenCalled();
  });

  describe('createMnemonic', () => {
    it('니모닉 단어를 서비스로 부터 잘 불러오는가?', () => {
      const expectedResult = {mnemonic: ['donkey', 'convince','stable', 'dolphin','smile', 'build','wrist', 'vote','demise', 'unfair','witness', 'tissue']};
      jest.spyOn(service, 'createMnemonic').mockReturnValue(expectedResult);
      expect(controller.createMnemonic()).toBe(expectedResult);
    })
  })
});

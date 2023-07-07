import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { getModelToken } from '@nestjs/mongoose';
import { Account, AccountSchema } from '../schemas/account.schema';

describe('AccountController', () => {
  let controller: AccountController;
  let accountServcie: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        AccountService,
        {
          provide: getModelToken(Account.name, 'local'),
          useValue: AccountSchema,
        },
      ],
    }).compile();

    controller = module.get<AccountController>(AccountController);
    accountServcie = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMnemonic', () => {
    it('니모닉이 잘 반환되어 오는가?', async () => {
      const mnemonic = {
        mnemonic: [
          'buddy',
          'syrup',
          'enrich',
          'speed',
          'more',
          'laptop',
          'winter',
          'potato',
          'cabbage',
          'report',
          'history',
          'right',
        ],
      };
      jest.spyOn(accountServcie, 'createMnemonic').mockReturnValue(mnemonic);

      expect(await controller.getMnemonic()).toBe(mnemonic);
      expect(accountServcie.createMnemonic).toHaveBeenCalled();
    });
  });
});

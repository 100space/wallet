import { Test, TestingModule } from '@nestjs/testing';
import { Web3Service } from './web3.service';
import { Web3Module } from './web3.module';
import { ConfigModule } from '@nestjs/config';
import Web3 from 'web3';

describe('Web3Service', () => {
  let service: Web3Service;
  let web3: Web3;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), Web3Module],
      providers: [
        {
          provide: 'Web3',
          useValue: jest.fn(),
        },
        Web3Service,
      ],
    }).compile();

    service = module.get<Web3Service>(Web3Service);
    web3 = module.get<Web3>('Web3');
  });

  describe('changeProvider', () => {
    it('should change the provider successfully', () => {
      const providerName = 'ganache';
      const setProviderSpy = jest.spyOn(web3, 'setProvider');

      const result = service.changeProvider({ providerName });

      expect(result).toBe('change provider success');
      expect(setProviderSpy).toHaveBeenCalledWith('http://localhost:8545');
    });

    it('should return "change provider failed" on error', () => {
      const providerName = 'invalid_provider';
      const setProviderSpy = jest
        .spyOn(web3, 'setProvider')
        .mockImplementation(() => {
          throw new Error('Invalid provider');
        });

      const result = service.changeProvider({ providerName });

      expect(result).toBe('change provider failed');
      expect(setProviderSpy).toHaveBeenCalledWith(undefined);
    });
  });

  describe('getProvider', () => {
    it('should return the current provider', () => {
      const result = service.getProvider();
      expect(result).toBe(web3.currentProvider);
    });
  });
});

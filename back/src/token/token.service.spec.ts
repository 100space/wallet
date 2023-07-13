import { Test, TestingModule } from '@nestjs/testing';
import { TokenService } from './token.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Web3Module } from '../web3/web3.module';
import { Web3Service } from '../web3/web3.service';
import { of, throwError } from 'rxjs';
import { AxiosResponse } from 'axios';
import { TokenRepository } from './token.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Token, TokenSchema } from '../schemas/token.schema';

describe('TokenService', () => {
  let service: TokenService;
  let httpService: HttpService;
  let web3Service: Web3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, Web3Module],
      providers: [
        TokenService,
        TokenRepository,
        { provide: getModelToken(Token.name, 'local'), useValue: TokenSchema },
      ],
    }).compile();

    service = module.get<TokenService>(TokenService);
    httpService = module.get<HttpService>(HttpService);
    web3Service = module.get<Web3Service>(Web3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTokenBalance', () => {
    //   it('should return the balances of coins and tokens', async () => {
    //     const assets = [
    //       { type: 'coin', ca: 'coinAddr1' },
    //       { type: 'coin', ca: 'coinAddr2' },
    //       { type: 'token', ca: 'tokenAddr1' },
    //       { type: 'token', ca: 'tokenAddr2' },
    //     ];
    //     const account = 'account';
    //     jest
    //       .spyOn(web3Service, 'getBalance')
    //       .mockResolvedValueOnce('10')
    //       .mockResolvedValueOnce('5');
    //     jest
    //       .spyOn(web3Service, 'getTokenBalance')
    //       .mockResolvedValueOnce({ symbol: 'STK', balance: '20' })
    //       .mockResolvedValueOnce({ symbol: 'CCT', balance: '50' });
    //     const result = await service.getTokenBalance({ assets, account });
    //     expect(result).toEqual({
    //       assets: [
    //         { type: 'coin', balance: '10' },
    //         { type: 'coin', balance: '5' },
    //         { type: 'token', symbol: 'STK', balance: '20' },
    //         { type: 'token', symbol: 'CCT', balance: '50' },
    //       ],
    //     });
    //   });
    // });
    // describe('getToken', () => {
    //   it('should return the token image', async () => {
    //     const contractAddress = 'tokenAddr';
    //     const responseData = {
    //       image: { large: 'tokenImage.png' },
    //     };
    //     jest
    //       .spyOn(httpService, 'get')
    //       .mockReturnValue(of({ data: responseData } as AxiosResponse));
    //     const result = await service.getToken({ contractAddress });
    //     expect(result).toEqual({ image: 'tokenImage.png' });
    //     expect(httpService.get).toHaveBeenCalledWith(
    //       `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`,
    //     );
    //   });
    //   it('should handle the "coin not found" error', async () => {
    //     const contractAddress = 'invalidTokenAddr';
    //     const errorResponse = { error: 'coin not found' };
    //     jest
    //       .spyOn(httpService, 'get')
    //       .mockReturnValue(throwError({ response: { data: errorResponse } }));
    //     const result = await service.getToken({ contractAddress });
    //     expect(result).toEqual({ image: 'no image' });
    //     expect(httpService.get).toHaveBeenCalledWith(
    //       `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`,
    //     );
    //   });
    // it('should throw an error for other errors', async () => {
    //   const contractAddress = 'tokenAddr';
    //   const errorResponse = { message: 'Internal server error' };
    //   jest
    //     .spyOn(httpService, 'get')
    //     .mockReturnValue(throwError({ response: { data: errorResponse } }));
    //   await expect(service.getToken({ contractAddress })).rejects.toThrow(
    //     'Unknown error',
    //   );
    //   expect(httpService.get).toHaveBeenCalledWith(
    //     `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`,
    //   );
    // });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { HttpModule } from '@nestjs/axios';
import { TokenRepository } from './token.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Token, TokenSchema } from '../schemas/token.schema';

describe('TokenController', () => {
  let controller: TokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TokenController],
      providers: [
        TokenService,
        TokenRepository,
        { provide: getModelToken(Token.name, 'local'), useValue: TokenSchema },
      ],
    }).compile();

    controller = module.get<TokenController>(TokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

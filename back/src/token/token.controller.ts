import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { TokenService } from './token.service';
import { IsERC20 } from 'src/decorator/ERC20';
import { NetworkValidationInterceptor } from '../interceptor/NetworkValid';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AddTokenDto } from './dto';

@ApiTags('Token')
@Controller('token')
@UseInterceptors(NetworkValidationInterceptor)
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  @ApiOperation({
    summary: '토큰을 추가합니다.',
    description: '토큰을 추가합니다.',
  })
  @ApiQuery({
    name: 'network',
    required: false,
    description:
      '사용하는 네트워크를 입력합니다. \n\n mumbai, ethereum, http://localhost:8545, ... \n\n Default: mumbai',
  })
  @ApiBody({ type: AddTokenDto })
  addToken(@IsERC20() { networkInfo, ca, symbol, decimal }: AddTokenDto) {
    return this.tokenService.addToken({ networkInfo, ca, symbol, decimal });
  }
}

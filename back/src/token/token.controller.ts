import { Body, Controller, Post, Put } from '@nestjs/common';
import { TokenService } from './token.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { getTokenDTO } from './dto/token.dto';

@Controller('token')
@ApiTags('Token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  getTokenBalance(@Body() { assets, account }) {
    return this.tokenService.getTokenBalance({ assets, account });
  }

  @ApiOperation({
    summary: 'CA에 해당하는 토큰 정보를 가져옵니다.',
    description: 'CA에 해당하는 토큰 정보를 가져옵니다.',
  })
  @Put()
  getToken(@Body() { contractAddress }: getTokenDTO) {
    return this.tokenService.getToken({ contractAddress });
  }
}

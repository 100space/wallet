import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TrendsService } from './trends.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { TokenSymbolDto } from './dto/get-token-trends.dto';

@ApiTags('Trends')
@Controller('trends')
export class TrendsController {
  constructor(private readonly trendsService: TrendsService) { }

  @Get('exchange')
  getExchange(@Query() { from, to }) {
    return this.trendsService.getExchange({ from, to });
  }

  @Get()
  @ApiOperation({
    summary: '코인 리스트를 가져옵니다.',
    description: '코인 리스트를 가져옵니다.',
  })
  @ApiQuery({
    name: 'count',
    description: '한 번에 가져올 코인의 개수',
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: 'sort',
    description: 'rank, name, price 중 어느 것을 기준으로 가져올지 정해줍니다.',
    required: false,
    example: 'name',
  })
  getCoinList(@Query() { sort = "rank", count = 20 }) {
    return this.trendsService.getCoinInfomation(sort, count);
  }

  @Post()
  @ApiOperation({
    summary: 'Symbol에 해당하는 토큰을 가져옵니다.',
    description: 'Symbol에 해당하는 토큰을 가져옵니다.',
  })
  getTokenData(@Body() { symbol }: TokenSymbolDto) {
    return this.trendsService.getTokenData({ symbol });
  }
}
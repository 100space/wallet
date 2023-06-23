import { Controller, Get, Param } from '@nestjs/common';
import { TrendsService } from './trends.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('trends')
@ApiTags('Trends')
export class TrendsController {
  constructor(private readonly trendsService: TrendsService) {}

  @ApiOperation({
    summary: 'id에 해당하는 코인을 가져옵니다.',
    description: 'id에 해당하는 코인을 가져옵니다.',
  })
  @ApiParam({
    name: 'id',
    description: '코인의 이름',
  })
  @Get(':id')
  getCoin(@Param('id') id: string) {
    return this.trendsService.getCoin(id);
  }

  @ApiOperation({
    summary: '상위 10개의 코인을 가져옵니다.',
    description: '상위 10개의 코인을 가져옵니다.',
  })
  @Get()
  getTrendCoins() {
    return this.trendsService.getTrendCoins();
  }
}

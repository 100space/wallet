import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TrendsService } from './trends.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('trends')
@ApiTags('Trends')
export class TrendsController {
  constructor(private readonly trendsService: TrendsService) {}

  @Get()
  getCoinList(@Query() { count = 10 }) {
    return this.trendsService.getCoinList({ count });
  }

  @Post()
  getTokenData(@Body() { symbol }) {
    return this.trendsService.getTokenData({ symbol });
  }
}

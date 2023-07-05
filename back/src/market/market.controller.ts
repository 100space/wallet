import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarketService } from './market.service';
import { ListNftByCaDto, ListNftByEoaDto } from './dto/market.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Market')
@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get()
  @ApiOperation({
    summary: 'NFT 컬렉션들을 가져옵니다.',
    description: 'NFT 컬렉션들을 가져옵니다.',
  })
  listCollections() {
    return this.marketService.listCollections();
  }

  @Post('user')
  @ApiOperation({
    summary: 'EOA를 기준으로 NFT들을 가져옵니다.',
    description: 'EOA를 기준으로 NFT들을 가져옵니다.',
  })
  listNftByEoa(@Body() { eoa }: ListNftByEoaDto) {
    return this.marketService.listNftByEoa({ eoa });
  }

  @Post()
  @ApiOperation({
    summary: 'CA를 기준으로 NFT들을 가져옵니다.',
    description: 'CA를 기준으로 NFT들을 가져옵니다.',
  })
  listNftByCa(@Body() { ca }: ListNftByCaDto) {
    return this.marketService.listNftByCa({ ca });
  }
}

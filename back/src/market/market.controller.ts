import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get()
  listCollections() {
    return this.marketService.listCollections();
  }

  @Post()
  listNft(@Body() { ca }) {
    return this.marketService.listNft({ ca });
  }
}

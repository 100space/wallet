import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { MarketService } from './market.service';
import { ListNftByCaDto, ListNftByEoaDto } from './dto/market.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListNftTransactionDto } from './dto/transaction-market.dto';
import { NftInfoDto } from './dto/info-market.dto';
import { ListCollectionsResponseDto } from './dto/listCollections-response.dto';
import { IsNFT } from '../decorator/NFT';
import { NetworkValidationInterceptor } from '../interceptor/NetworkValid';
import { AddNftDto } from './dto/add-market.dto';

@ApiTags('Market')
@Controller('market')
@UseInterceptors(NetworkValidationInterceptor)
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get()
  @ApiOperation({
    summary: 'NFT 컬렉션들을 가져옵니다.',
    description: 'NFT 컬렉션들을 가져옵니다.',
  })
  @ApiResponse({
    status: 200,
    type: ListCollectionsResponseDto,
  })
  async listCollections(@Query('page') page = 1, @Query('search') search?: string) {
    return await this.marketService.listCollections(page, search);
  }

  @Post('user')
  @ApiOperation({
    summary: 'EOA를 기준으로 NFT들을 가져옵니다.',
    description: 'EOA를 기준으로 NFT들을 가져옵니다.',
  })
  async listNftByEoa(@Body() { eoa }: ListNftByEoaDto) {
    return await this.marketService.listNftByEoa({ eoa });
  }

  @Post('transaction')
  @ApiOperation({
    summary: 'CA와 TokenId를 받아 해당 NFT의 트랜잭션 기록을 보여줍니다.',
    description: 'CA와 TokenId를 받아 해당 NFT의 트랜잭션 기록을 보여줍니다.',
  })
  async listNftTransaction(@Body() { ca, tokenId }: ListNftTransactionDto) {
    return await this.marketService.listNftTransaction({ ca, tokenId });
  }

  @Post('info')
  @ApiOperation({
    summary: 'CA와 TokenId를 받아 해당 NFT의 정보를 보여줍니다.',
    description: 'CA와 TokenId를 받아 해당 NFT의 정보를 보여줍니다.',
  })
  async nftInfo(@Body() { ca, tokenId }: NftInfoDto) {
    return await this.marketService.nftInfo({ ca, tokenId });
  }

  @Post('currency')
  @ApiOperation({
    summary: '네트워크에 따라 화폐를 변경합니다.',
    description: 'symbol을 받아 해당 통화를 symbol로 변경합니다.',
  })
  async changeBasicCurrency(@Body() { symbol = 'matic' }: { symbol: string }) {
    return await this.marketService.changeBasicCurrency({ symbol });
  }

  @Post('erc721')
  async getERC20Info(@Body() { eoa, ca, tokenId }) {
    return await this.marketService.getERC721Info({ eoa, ca, tokenId });
  }

  @Post('erc1155')
  async getERC1155Info(@Body() { ca, tokenId }) {
    return await this.marketService.getERC1155Info({ ca, tokenId });
  }

  @Post()
  @ApiOperation({
    summary: 'CA를 기준으로 NFT들을 가져옵니다.',
    description: 'CA를 기준으로 NFT들을 가져옵니다.',
  })
  async listNftByCa(@Body() { ca }: ListNftByCaDto) {
    return await this.marketService.listNftByCa({ ca });
  }

  @Put()
  @ApiOperation({
    summary: 'CA와 TokenId에 해당하는 NFT 정보를 가져옵니다.',
    description: 'CA와 TokenId에 해당하는 NFT 정보를 가져옵니다.',
  })
  async addNft(
    @IsNFT() { tokenStandard }: { tokenStandard: string },
    @Body() { eoa, ca, tokenId }: AddNftDto,
  ) {
    return await this.marketService.addNft({
      tokenStandard,
      eoa,
      ca,
      tokenId,
    });
  }
}

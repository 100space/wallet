import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { NetworkService } from './network.service';
import { CreateNetworkDto, GetNetworkResponseDto } from "./dto";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

@Controller('network')
@ApiTags('NetWork')
export class NetworkController {
  constructor(private readonly networkService: NetworkService) { }

  @ApiOperation({
    summary: '주소가 가진 네트워크 정보를 가져옵니다.',
    description: '주소가 가진 네트워크 정보를 가져옵니다.'
  })
  @ApiQuery({
    description: '지갑의 주소를 입력합니다.',
    example: '0x0000000000000000000000000000000000000000',
  })
  @Get()
  async getNetWork(@Query('address') address: string): Promise<GetNetworkResponseDto> {
    return await this.networkService.getNetWorkList(address);
  }

  @ApiOperation({
    summary: '네트워크를 추가합니다.',
    description: '네트워크 정보를 받아 네트워크를 추가합니다.'
  })
  @Post()
  async addNetWork(@Body() createNetworkDto: CreateNetworkDto, @Query('address') address: string): Promise<GetNetworkResponseDto> {
    return await this.networkService.addNetWork(createNetworkDto, address);
  }
}


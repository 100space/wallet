import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { NetworkService } from './network.service';
import { CreateNetworkDto, GetNetworkResponseDto } from "./dto";
import { ApiOperation } from "@nestjs/swagger";

@Controller('network')
export class NetworkController {
  constructor(private readonly networkService: NetworkService) { }

  @ApiOperation({
    summary: '주소가 가진 네트워크 정보를 가져옵니다.',
    description: '주소가 가진 네트워크 정보를 가져옵니다.'
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


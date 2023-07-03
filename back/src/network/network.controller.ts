import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { NetworkService } from './network.service';
import { CreateNetworkDto, CreateNetworkListDto } from "./dto";

@Controller('network')
export class NetworkController {
  constructor(private readonly networkService: NetworkService) { }

  @Get()
  async getNetWork(@Query('name') name: string) {
    return await this.networkService.getNetWork(name);
  }

  @Post()
  async createNetWork(@Body() createNetworkDto: CreateNetworkDto) {
    return await this.networkService.createNetWork(createNetworkDto);
  }

  @Get('account')
  async getNetWorkList(@Query('address') address: string) {
    console.log(address)
  }

  @Post('account')
  async createNetWorkListByAddress(@Body() createNetworkListDto: CreateNetworkListDto) {
    return await this.networkService.createNetWorkListByAddress(createNetworkListDto);
  }
}


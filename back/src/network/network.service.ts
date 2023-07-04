import { Injectable } from '@nestjs/common';
import { NetWorkRepository } from "./network.repository";
import { NetWorkListRepository } from "./networkList.repository";
import { CreateNetworkDto, CreateNetworkListDto } from "./dto";

@Injectable()
export class NetworkService {
  constructor(
    private readonly netWorkRepository: NetWorkRepository,
    private readonly netWorkListRepository: NetWorkListRepository
  ) { }

  async getNetWork(name: string) {
    return await this.netWorkRepository.findOne(name.toUpperCase());
  }

  async getNetWorkList(address: string) {
    const isData = await this.netWorkListRepository.findOne(address)
    if ( isData === null) return await this.netWorkListRepository.create(address)
    return isData
  }

  async createNetWork(createNetworkDto: CreateNetworkDto) {
    createNetworkDto.name = createNetworkDto.name.toUpperCase()
    createNetworkDto.symbol = createNetworkDto.symbol.toUpperCase()
    return await this.netWorkRepository.create(createNetworkDto);
  }

  // async createNetWorkListByAddress(createNetworkListDto: CreateNetworkListDto) {
  //   const isData = await this.netWorkListRepository.findOne(createNetworkListDto.address)
  //   if ( isData !== null) return  await this.netWorkListRepository.update(createNetworkListDto, isData.networkList)
  //     return await this.netWorkListRepository.create(createNetworkListDto);
  // }
}

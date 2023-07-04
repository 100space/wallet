import { Injectable } from '@nestjs/common';
import { NetWorkRepository } from "./network.repository";
import { NetWorkListRepository } from "./networkList.repository";
import { CreateNetworkDto } from "./dto";

@Injectable()
export class NetworkService {
  constructor(
    private readonly netWorkRepository: NetWorkRepository,
    private readonly netWorkListRepository: NetWorkListRepository
  ) { }

  async getNetWorkList(address: string) {
    const isData = await this.netWorkListRepository.findOne(address)

    if (isData === null) return await this.netWorkListRepository.create(address)

    const { networkList } = isData
    return { networkList }
  }

  async addNetWork(createNetworkDto: CreateNetworkDto, address: string) {

    const upperName = createNetworkDto.name.toUpperCase()
    createNetworkDto.name = upperName
    createNetworkDto.symbol = createNetworkDto.symbol.toUpperCase()

    const isNetWork = await this.netWorkRepository.findOne(createNetworkDto.name)
    
    if (isNetWork === null) await this.netWorkRepository.create(createNetworkDto);

    const { networkList } = await this.netWorkListRepository.findOne(address)
    const isNetWorkList = networkList.filter(v => v === upperName)

    if (!isNetWorkList) networkList.push(upperName)

    await this.netWorkListRepository.update({ address, networkList })
    return { networkList }
  }
}
import { Injectable } from '@nestjs/common';
import { CreateNetworkDto } from './dto/create-network.dto';
import { UpdateNetworkDto } from './dto/update-network.dto';
import { NetWork } from "src/schemas/network.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { NetWorkList } from "src/schemas/networkList.schema";

@Injectable()
export class NetworkService {
  constructor(
    @InjectModel(NetWork.name) private networkModel: Model<NetWork>,
    @InjectModel(NetWorkList.name) private networkListModel: Model<NetWorkList>
  ) { }


  create(createNetworkDto: CreateNetworkDto) {
    return 'This action adds a new network';
  }

  findAll() {
    return `This action returns all network`;
  }

  findOne(id: number) {
    return `This action returns a #${id} network`;
  }

  update(id: number, updateNetworkDto: UpdateNetworkDto) {
    return `This action updates a #${id} network`;
  }

  remove(id: number) {
    return `This action removes a #${id} network`;
  }
}

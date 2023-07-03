import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NetWorkList } from "src/schemas/networkList.schema";
import { CreateNetworkListDto } from "./dto";

@Injectable()
export class NetWorkListRepository {
    constructor(@InjectModel(NetWorkList.name) private networkListModel: Model<NetWorkList>) { }

    dafaultData(data: string[]){
        const defaultNetworkList = ["ETHEREUM", "ARBITRUM", "POLYGON", "GOERLI"]
        defaultNetworkList.push(...data)
        console.log(defaultNetworkList)
        return defaultNetworkList
    }

    async create(createNetworkListDto: CreateNetworkListDto) {
        this.dafaultData(createNetworkListDto.networkList)
        return await this.networkListModel.create(createNetworkListDto);
    }

    async update(createNetworkListDto: CreateNetworkListDto, networkList: string[]) {
        const { address } = createNetworkListDto
        return await this.networkListModel.findOneAndUpdate({ address }, createNetworkListDto)
    }

    async findOne(address: string) {
        return await this.networkListModel.findOne({ address })
    }

    async findAll() {
        return await this.networkListModel.find();
    }
}
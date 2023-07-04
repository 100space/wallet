import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NetWorkList } from "src/schemas/networkList.schema";
import { UpdateNetworkDto } from "./dto";

@Injectable()
export class NetWorkListRepository {
    constructor(@InjectModel(NetWorkList.name) private networkListModel: Model<NetWorkList>) { }

    async create(address: string) {
        const defaultData = ["ETHEREUM", "ARBITRUM", "POLYGON", "GOERLI"]
        return await this.networkListModel.create({ address, networkList: defaultData });
    }

    async update(updateNetworkDto: UpdateNetworkDto) {
        const { address } = updateNetworkDto
        return await this.networkListModel.findOneAndUpdate({ address }, updateNetworkDto)
    }

    async findOne(address: string) {
        return await this.networkListModel.findOne({ address })
    }

    async findAll() {
        return await this.networkListModel.find();
    }
}
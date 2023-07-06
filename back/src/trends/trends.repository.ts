import { Trend } from "src/schemas/trend.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateTrendDto } from "./dto/create-trend.dto";
import * as fs from "fs"
import { UpdateTrendDto } from "./dto/update-trend.dto";

@Injectable()
export class TrendRepository {
    constructor(@InjectModel(Trend.name) private trendModel: Model<Trend>) { }

    async create(createTrendDto: CreateTrendDto) {
        try {
            await this.trendModel.create(createTrendDto);
            return true
        } catch (error) {
            console.log('Create Error', error.message)
            return false
        }
    }

    async update(symbol, updateTrendDto: UpdateTrendDto) {
        try {
            await this.trendModel.findOneAndUpdate({ symbol }, { $set: updateTrendDto })
            return true
        } catch (error) {
            console.log('Update Error', error.message)
            return false
        }
    }

    async findOne(symbol) {
        return await this.trendModel.findOne({ symbol });
    }

    async findAll() {
        return await this.trendModel.find();
    }
}

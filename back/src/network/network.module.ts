import { Module } from '@nestjs/common';
import { NetworkService } from './network.service';
import { NetworkController } from './network.controller';
import { NetWork, NetWorkSchema } from "src/schemas/network.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { NetWorkList, NetWorkListSchema } from "src/schemas/networkList.schema";

@Module({
  imports: [MongooseModule.forFeature(
    [
      { name: NetWork.name, schema: NetWorkSchema },
      { name: NetWorkList.name, schema: NetWorkListSchema }
    ]
  )],
  controllers: [NetworkController],
  providers: [NetworkService]
})
export class NetworkModule { }

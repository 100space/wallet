import { Module } from '@nestjs/common';
import { NetworkService } from './network.service';
import { NetworkController } from './network.controller';
import { NetWork, NetWorkSchema } from '../schemas/network.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { NetWorkList, NetWorkListSchema } from '../schemas/networkList.schema';
import { NetWorkRepository } from './network.repository';
import { NetWorkListRepository } from './networkList.repository';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: NetWork.name, schema: NetWorkSchema },
        { name: NetWorkList.name, schema: NetWorkListSchema },
      ],
      'local',
    ),
  ],
  controllers: [NetworkController],
  providers: [NetworkService, NetWorkRepository, NetWorkListRepository],
})
export class NetworkModule {}

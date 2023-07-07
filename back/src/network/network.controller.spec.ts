import { Test, TestingModule } from '@nestjs/testing';
import { NetworkController } from './network.controller';
import { NetworkService } from './network.service';
import { NetWorkRepository } from './network.repository';
import { NetWorkListRepository } from './networkList.repository';
import { getModelToken } from '@nestjs/mongoose';
import { NetWork, NetWorkSchema } from '../schemas/network.schema';
import { NetWorkList, NetWorkListSchema } from '../schemas/networkList.schema';

describe('NetworkController', () => {
  let controller: NetworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetworkController],
      providers: [
        NetworkService,
        NetWorkRepository,
        NetWorkListRepository,
        {
          provide: getModelToken(NetWork.name, 'local'),
          useValue: NetWorkSchema,
        },
        {
          provide: getModelToken(NetWorkList.name, 'local'),
          useValue: NetWorkListSchema,
        },
      ],
    }).compile();

    controller = module.get<NetworkController>(NetworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

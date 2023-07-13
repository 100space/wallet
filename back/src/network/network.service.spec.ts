import { Test, TestingModule } from '@nestjs/testing';
import { NetworkService } from './network.service';
import { NetWorkListRepository } from './networkList.repository';
import { NetWork, NetWorkSchema } from '../schemas/network.schema';
import { NetWorkList, NetWorkListSchema } from '../schemas/networkList.schema';
import { getModelToken } from '@nestjs/mongoose';
import { NetWorkRepository } from './network.repository';

describe('NetworkService', () => {
  let service: NetworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<NetworkService>(NetworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

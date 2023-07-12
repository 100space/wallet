import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';
import { Contract, ethers } from 'ethers';
import { ERC165_ABI } from '../abi/ERC165.ABI';
import { ERC1155_INTERFACE_ID, ERC721_INTERFACE_ID } from '../constant/token';

const isNftStandard = async (contract: Contract) => {
  try {
    if (await contract.supportsInterface(ERC1155_INTERFACE_ID)) {
      return { tokenStandard: 'ERC 1155' };
    }
    if (await contract.supportsInterface(ERC721_INTERFACE_ID)) {
      return { tokenStandard: 'ERC 721' };
    }
    return { tokenStandard: 'Non-standard' };
  } catch (error) {
    throw new Error('CA is not valid');
  }
};

export const IsNFT = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const {
      body: { ca },
      networkInfo,
    } = ctx.switchToHttp().getRequest();

    const abi = ERC165_ABI;

    try {
      const provider = new ethers.JsonRpcProvider(networkInfo.rpc);
      const contract = new Contract(ca, abi, provider);

      return await isNftStandard(contract);
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(),
        description: 'NFT valid check failed',
      });
    }
  },
);

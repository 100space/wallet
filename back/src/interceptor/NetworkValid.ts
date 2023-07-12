import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ethers } from 'ethers';

const networks = {
  ethereum: { rpc: process.env.ETHEREUM_NETWORK, chainId: 1 },
  goerli: { rpc: process.env.GOERLI_NETWORK, chainId: 5 },
  mumbai: { rpc: process.env.MUMBAI_NETWORK, chainId: 80001 },
  arbitrum: { rpc: process.env.ARBITRUM_NETWORK, chainId: 42161 },
  arbitrum_goerli: {
    rpc: process.env.ARBITRUM_GOERLI_NETWORK,
    chainId: 421613,
  },
};

const isValidNetwork = (network: string) => {
  try {
    return new ethers.JsonRpcProvider(network);
  } catch (error) {
    throw new Error(error.message);
  }
};

const isValidChainId = (currentChainId: string | number, chainId: number) => {
  if (currentChainId !== chainId) throw new Error('ChainId is not valid');
};

@Injectable()
export class NetworkValidationInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const network = req.cookies.network;

    if (!network || network.length === 0) {
      req.networkInfo = networks.mumbai;
      return next.handle();
    }

    if (Object.keys(networks).includes(network)) {
      req.networkInfo = networks[network];
      return next.handle();
    }

    try {
      const currentNetwork = JSON.parse(network);
      const provider = isValidNetwork(currentNetwork.rpc);
      const { chainId } = await provider.getNetwork();
      isValidChainId(currentNetwork.chainId, Number(chainId));
      req.networkInfo = {
        rpc: currentNetwork.rpc,
        chainId: Number(chainId),
      };
      return next.handle();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

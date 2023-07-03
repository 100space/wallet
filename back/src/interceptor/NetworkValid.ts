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
};

const isValidNetwork = (network: string) => {
  try {
    return new ethers.JsonRpcProvider(network);
  } catch (error) {
    throw new Error(error.message);
  }
};

@Injectable()
export class NetworkValidationInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const network = req.query.network;

    if (!network || network.length === 0) {
      req.networkInfo = networks.mumbai;
      return next.handle();
    }

    if (Object.keys(networks).includes(network)) {
      req.networkInfo = networks[network];
      return next.handle();
    }

    try {
      const provider = isValidNetwork(network);
      const { chainId } = await provider.getNetwork();
      req.networkInfo = { rpc: req.query.network, chainId: Number(chainId) };
      return next.handle();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ethers, Contract } from 'ethers';
import { ERC20_ABI } from '../abi/ERC20.ABI';

const isValidCA = (provider: ethers.JsonRpcProvider, ca: string) => {
  if (ca.length < 42 || ca === undefined) {
    throw new Error('CA length is not valid');
  }
  try {
    return new Contract(ca, ERC20_ABI, provider);
  } catch (error) {
    throw new Error('Contract Failed');
  }
};

const isValidSymbol = async (contract: ethers.Contract, symbol: string) => {
  if (!symbol) {
    throw new Error('Please enter token Symbol');
  }
  try {
    const target = await contract.symbol();
    if (target.toUpperCase() !== symbol.toUpperCase()) {
      throw new Error('Symbol does not match');
    }
    return target;
  } catch (error) {
    throw new Error(error.message);
  }
};

const isValidDecimal = async (contract: ethers.Contract, decimal: number) => {
  if (decimal === undefined) {
    throw new Error('Please enter token decimal');
  }
  try {
    const target = Number(await contract.decimals());
    if (target !== decimal) {
      throw new Error('Decimal does not match');
    }
    return target;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const IsERC20 = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const {
      body: { ca, symbol, decimal },
      networkInfo,
    } = ctx.switchToHttp().getRequest();

    try {
      const provider = new ethers.JsonRpcProvider(networkInfo.rpc);

      const contract = isValidCA(provider, ca);
      const validSymbol = await isValidSymbol(contract, symbol);
      const validDecimal = await isValidDecimal(contract, decimal);

      return { networkInfo, ca, symbol: validSymbol, decimal: validDecimal };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  },
);

// import Web3 from 'web3';

// const isValidCA = (web3: Web3, ca: string) => {
//   if (ca.length < 42 || ca === undefined) {
//     throw new Error('CA length is not invalid');
//   }
//   try {
//     return new web3.eth.Contract(tokenAbi, ca);
//   } catch (error) {
//     throw new Error('Contract Failed');
//   }
// };

// const isValidSymbol = async (contract, symbol: string) => {
//   if (!symbol) {
//     throw new Error('Please enter token Symbol');
//   }
//   try {
//     const target = await contract.methods.symbol().call();
//     if (target !== symbol.toUpperCase()) {
//       throw new Error('Symbol does not match');
//     }
//     return target;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const isValidDecimal = async (contract, decimal: number) => {
//   if (decimal === undefined) {
//     throw new Error('Please enter token decimal');
//   }
//   try {
//     const target = Number(await contract.methods.decimals().call());
//     if (target !== decimal) {
//       throw new Error('Decimal does not match');
//     }
//     return target;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const IsERC20 = createParamDecorator(
//   async (data: unknown, ctx: ExecutionContext) => {
//     const {
//       body: { ca, symbol, decimal },
//       currentNetwork,
//     } = ctx.switchToHttp().getRequest();

//     try {
//       const web3 = new Web3(currentNetwork);
//       const contract = isValidCA(web3, ca);
//       const validSymbol = await isValidSymbol(contract, symbol);
//       const validDecimal = await isValidDecimal(contract, decimal);

//       return { ca, symbol: validSymbol, decimal: validDecimal };
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
//     }
//   },
// );

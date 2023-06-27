import { Inject, Injectable } from '@nestjs/common';
import Web3 from 'web3'; // 타입 지정을 위해 사용

interface ContractMethods {
  methods: {
    decimals(): { call(): Promise<string> };
    symbol(): { call(): Promise<string> };
    balanceOf(address: string): {
      call(): Promise<string>;
    };
  };
}

@Injectable()
export class Web3Service {
  // module에 정의한 Web3 사용
  constructor(@Inject('Web3') private readonly web3: Web3) {}

  async getTokenBalance({ contractAddress, account }) {
    const tokenAbi = [
      {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint8' }],
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            name: '',
            type: 'string',
          },
        ],
        payable: false,
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        type: 'function',
      },
    ];

    const contract = new this.web3.eth.Contract(
      tokenAbi,
      contractAddress,
    ) as unknown as ContractMethods;
    const decimal = Number(await contract.methods.decimals().call());
    const symbol = await contract.methods.symbol().call();
    const balance =
      Number(await contract.methods.balanceOf(account).call()) / 10 ** decimal;
    return { symbol, balance };
  }

  getAccounts() {
    return this.web3.eth.getAccounts();
  }

  async getBalance(account: string) {
    const balance = await this.web3.eth.getBalance(account);
    return this.web3.utils.fromWei(balance, 'ether');
  }

  async sendTransaction({ sender, receiver, amount }) {
    const bill = this.web3.utils.toWei(amount, 'ether');

    const message = await this.web3.eth.sendTransaction({
      from: sender,
      to: receiver,
      value: bill,
    });

    return JSON.stringify(message, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value,
    );
  }
}

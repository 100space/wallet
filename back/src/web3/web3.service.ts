import { Inject, Injectable } from '@nestjs/common';
import Web3 from 'web3'; // 타입 지정을 위해 사용
import { IContractMethods } from 'src/interface/web3.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Web3Service {
  // module에 정의한 Web3 사용
  constructor(
    @Inject('Web3') private readonly web3: Web3,
    private readonly config: ConfigService,
  ) {}

  changeProvider({ providerName }) {
    try {
      const networks = {
        ganache: 'http://localhost:8545',
        goerli: this.config.get<string>('GOERLI_NETWORK'),
        mumbai: this.config.get<string>('MUMBAI_NETWORK'),
      };

      this.web3.setProvider(networks[providerName]);
      return 'change provider success';
    } catch (error) {
      return 'change provider failed';
    }
  }

  getProvider() {
    return this.web3.currentProvider;
  }

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
    ) as unknown as IContractMethods;
    const decimal = Number(await contract.methods.decimals().call());
    const symbol = await contract.methods.symbol().call();
    const balance = String(
      Number(await contract.methods.balanceOf(account).call()) / 10 ** decimal,
    );
    return { symbol, balance };
  }

  getAccounts() {
    return this.web3.eth.getAccounts();
  }

  async getBalance(account: string) {
    const balance = await this.web3.eth.getBalance(account);
    return this.web3.utils.fromWei(balance, 'ether');
  }

  async sendTransaction({ privateKey, receiver, amount }) {
    const signer = this.web3.eth.accounts.privateKeyToAccount(privateKey);

    const bill = this.web3.utils.toWei(amount, 'ether');

    const tx = {
      from: signer.address,
      to: receiver,
      value: bill,
      gas: await this.web3.eth.estimateGas({
        from: signer.address,
        to: receiver,
      }),
    };

    this.web3.eth.accounts.wallet.add(signer);

    const receipt = await this.web3.eth
      .sendTransaction(tx)
      .on('error', (error) => console.log('error : ', error));

    return {
      message: 'success to send transaction',
      transactionHash: `${receipt.transactionHash}`,
    };
  }
}

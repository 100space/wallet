import { Inject, Injectable } from '@nestjs/common';
import Web3 from 'web3'; // 타입 지정을 위해 사용

@Injectable()
export class Web3Service {
  // module에 정의한 Web3 사용
  constructor(@Inject('Web3') private readonly web3: Web3) {}

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

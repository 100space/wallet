import { Injectable } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';

@Injectable()
export class TransactionService {
  constructor(private readonly web3: Web3Service) {}

  getBalance(account) {
    return this.web3.getBalance(account);
  }

  getAccounts() {
    return this.web3.getAccounts();
  }

  sendTransaction({ sender, receiver, amount }) {
    return this.web3.sendTransaction({ sender, receiver, amount });
  }
}

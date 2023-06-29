import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { sendTransactionDto } from './dto/transaction.dto';

@Controller('transaction')
@ApiTags('Transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @ApiOperation({
    summary: 'account에 해당하는 잔액을 가져옵니다.',
    description: 'account에 해당하는 잔액을 가져옵니다.',
  })
  @Get(':account')
  getBalance(@Param('account') account: string) {
    return this.transactionService.getBalance(account);
  }

  @Get()
  getAccounts() {
    return this.transactionService.getAccounts();
  }

  @ApiOperation({
    summary: 'Address로 트랜잭션을 발생 시킵니다.',
    description: 'Address로 트랜잭션을 발생 시킵니다.',
  })
  @Post()
  sendTransaction(
    @Body() { privateKey, receiver, amount }: sendTransactionDto,
  ) {
    return this.transactionService.sendTransaction({
      privateKey,
      receiver,
      amount,
    });
  }

  @Put()
  changeProvider(@Body() { providerName }) {
    return this.transactionService.changeProvider({ providerName });
  }
}

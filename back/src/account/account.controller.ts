import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { IAccount, Mnemonic } from "src/interface/mnemonic.interface";

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/mnemonic')
  getMnemonic(){
    return this.accountService.createMnemonic();
  }

  @Post('/mnemonic')
  postMnemonic(@Body() body: { mnemonic: Mnemonic }): IAccount{
    return this.accountService.createAccount(body.mnemonic);
  }
}

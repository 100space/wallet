import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { IAccount, Mnemonic } from "src/interface/mnemonic.interface";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetMnemonicDTO } from "./dto/get-mnemonic.dto";
import { PostMnemonicDTO } from "./dto/post-mnemonic.dto";

@Controller('account')
@ApiTags('Account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  
  @ApiOperation({
    summary: '니모닉 배열을 가져옵니다.',
    description: '12단어로 이루어진 니모닉 배열을 가져옵니다.',
  })
  @Get('/mnemonic')
  getMnemonic(): GetMnemonicDTO{
    return this.accountService.createMnemonic();
  }

  @ApiOperation({
    summary: '니모닉을 이용해 계정을 생성합니다.',
    description: '니모닉을 이용해 계정을 생성하고 이더리움 네트워크 기반의 개인키, 공개키, 주소를 가져옵니다.',
  })
  @Post('/mnemonic')
  postMnemonic(@Body() { mnemonic }: GetMnemonicDTO): PostMnemonicDTO{
    return this.accountService.createAccount( mnemonic );
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto, ICreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { IAccount, Mnemonic } from "src/interface/account.interface";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetMnemonicDTO } from "./dto/get-mnemonic.dto";
import { PostMnemonicDTO } from "./dto/post-mnemonic.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('account')
@ApiTags('Account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({
    summary: '닉네임을 입력, 변경합니다.',
    description: '닉네임을 입력 또는 변경하여 성공했는지 true, false로 반환합니다.'
  })
  @Post()
  async createAccount(@Body() { address, nickname }: ICreateAccountDto): Promise<CreateAccountDto>{
    return this.accountService.createAccount({ address, nickname });
  }

  @ApiOperation({
    summary: '프로필 이미지를 추가합니다.',
    description: '프로필 이미지를 추가하고, 저장된 프로필 이미지의 url을 가져옵니다.'
  })
  @Post('/profile')
  @UseInterceptors(FileInterceptor('profileImg'))
  async uploadProfileImg(@UploadedFile() file: Express.MulterS3.File, @Query('address') address: string){
    return this.accountService.uploadProfileImg(file, address);
  }

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
    if( !mnemonic ) return this.accountService.createWallet()
    return this.accountService.createWalletByMnemonic( mnemonic );
  }
}

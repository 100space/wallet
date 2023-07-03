import { CreateAccountDto, CreateAccountResponseDto, UploadProfileImgResponseDto, CreateMnemonicDto, CreateWalletDto, CreateWalletResponseDto, GetAccountResponseDto, IAddress } from "./dto";
import { Controller, Post, Body, UseInterceptors, UploadedFile, Get, Query } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { AccountService } from "./account.service";


@Controller('account')
@ApiTags('Account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({
    summary: '계정에 대한 정보를 가져옵니다.',
    description: '계정의 주소를 이용하여, 주소에 대한 닉네임, 이메일을 가져옵니다.'
  })
  @Get()
  async getAccount(@Query('address') address: IAddress): Promise<GetAccountResponseDto>{
    return this.accountService.getAccount(address);
  }

  @ApiOperation({
    summary: '닉네임을 입력, 변경합니다.',
    description: '닉네임을 입력 또는 변경하여 성공했는지 true, false로 반환합니다.'
  })
  @Post()
  async createAccount(@Body() { address, nickname }: CreateAccountDto): Promise<CreateAccountResponseDto>{
    return this.accountService.createAccount({ address, nickname });
  }

  @ApiOperation({
    summary: '프로필 이미지를 추가합니다.',
    description: '프로필 이미지를 추가하고, 저장된 프로필 이미지의 url을 가져옵니다.'
  })
  @Post('/profile')
  @UseInterceptors(FileInterceptor('profileImg'))
  async uploadProfileImg(@UploadedFile() file: Express.MulterS3.File, @Query('address') address: string): Promise<UploadProfileImgResponseDto>{
    return this.accountService.uploadProfileImg({ file, address });
  }

  @ApiOperation({
    summary: '니모닉 배열을 가져옵니다.',
    description: '12단어로 이루어진 니모닉 배열을 가져옵니다.',
  })
  @Get('/mnemonic')
  async getMnemonic(): Promise<CreateMnemonicDto>{
    return this.accountService.createMnemonic();
  }

  @ApiOperation({
    summary: '니모닉을 이용해 계정을 생성합니다.',
    description: '니모닉을 이용해 계정을 생성하고 이더리움 네트워크 기반의 개인키, 공개키, 주소를 가져옵니다.',
  })
  @Post('/mnemonic')
  async postMnemonic(@Body() { mnemonic }: CreateWalletDto): Promise<CreateWalletResponseDto>{
    if( !mnemonic ) return this.accountService.createWallet()
    return this.accountService.createWalletByMnemonic({ mnemonic });
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MnemonicService } from './mnemonic.service';
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('mnemonic')
@ApiTags('Mnemonic')
export class MnemonicController {
  constructor(private readonly mnemonicService: MnemonicService) { }

  @ApiOperation({
    summary: '니모닉을 생성하여 가져옵니다.',
    description: '12 단어로 구성된 니모닉을 생성하여 가져옵니다.'
  })
  @Get()
  createMnemonic(): { mnemonic: string[] } {
    return this.mnemonicService.createMnemonic();
  }

  @Post()
  async createAccount(@Body() mnemonic: string[]): Promise<any> {
    return this.mnemonicService.createAccount();
  }
}

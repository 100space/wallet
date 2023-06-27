import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MnemonicService } from './mnemonic.service';
import { CreateMnemonicDto } from './dto/create-mnemonic.dto';
import { UpdateMnemonicDto } from './dto/update-mnemonic.dto';

@Controller('mnemonic')
export class MnemonicController {
  constructor(private readonly mnemonicService: MnemonicService) {}
  
  @Get()
  createMnemonic() {
    return this.mnemonicService.createMnemonic();
  }
}

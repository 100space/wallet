import { Module } from '@nestjs/common';
import { MnemonicService } from './mnemonic.service';
import { MnemonicController } from './mnemonic.controller';

@Module({
  controllers: [MnemonicController],
  providers: [MnemonicService]
})
export class MnemonicModule {}

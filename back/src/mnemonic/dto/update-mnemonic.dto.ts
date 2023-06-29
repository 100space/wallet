import { PartialType } from '@nestjs/swagger';
import { CreateMnemonicDto } from './create-mnemonic.dto';

export class UpdateMnemonicDto extends PartialType(CreateMnemonicDto) {}

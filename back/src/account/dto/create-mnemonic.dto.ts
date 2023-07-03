import { ApiProperty } from "@nestjs/swagger";

export class CreateMnemonicDto {
    @ApiProperty({
        description: '니모닉 단어 12가지',
        default:
            '["chief","like","unveil","elite","void","mixed","ball","ribbon","pipe","disagree","where","wear"]',
    })
    mnemonic?: string[];
}
import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
    @ApiProperty({
        example: ["chief","like","unveil","elite","void","mixed","ball","ribbon","pipe","disagree","where","wear"],
        description: 'The mnemonic words used to create the wallet',
        type: [String],
    })
    mnemonic: string[];
}

export class CreateWalletResponseDto {
    @ApiProperty({
        description: '니모닉 단어 12가지',
        default:{
            "privateKey": "0xd11ca996b35252abf1cbb6ad852739004a69c12c653a052e502be4740a7261e4",
            "publicKey": "0x02b0a43ff9d9b011efc12af1dcb734f67ae92deb8e2020bb715039c23fc25c1623",
            "address": "0x72cbf440cB8827DbDDd3ade3eE771104A6006dB2"
        },
    })
    privateKey: string
    publicKey: string
    address: string
}
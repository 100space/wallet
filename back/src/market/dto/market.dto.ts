import { ApiProperty } from '@nestjs/swagger';

export class ListNftByEoaDto {
  @ApiProperty({
    description: 'NFT 소유주의 EOA',
    default: '0x28C9fC2f5C973EEEb00e0692074f2569501078F3',
  })
  eoa: string;
}

export class ListNftByCaDto {
  @ApiProperty({
    description: 'NFT의 CA',
    default: '0xCd7f3fe4f5a680cBaCbaFAc8Bd27eFB126Ab05C1',
  })
  ca: string;
}

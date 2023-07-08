import { ApiProperty } from '@nestjs/swagger';

export class ListNftTransactionDto {
  @ApiProperty({
    description: 'NFT의 CA',
    default: '0xCd7f3fe4f5a680cBaCbaFAc8Bd27eFB126Ab05C1',
  })
  ca: string;

  @ApiProperty({
    description: 'NFT의 ID',
    default: 1,
  })
  tokenId: number;
}

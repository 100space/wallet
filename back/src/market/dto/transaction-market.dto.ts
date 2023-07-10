import { ApiProperty } from '@nestjs/swagger';

export class ListNftTransactionDto {
  @ApiProperty({
    description: 'NFT의 CA',
    default: '0x0373a517569A4C9Ead2Cd85fCeb7E1fE694e6e4b',
  })
  ca: string;

  @ApiProperty({
    description: 'NFT의 ID',
    default: 1,
  })
  tokenId: number;
}

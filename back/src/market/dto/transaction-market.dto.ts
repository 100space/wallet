import { ApiProperty } from '@nestjs/swagger';

export class ListNftTransactionDto {
  @ApiProperty({
    description: 'NFT의 CA',
    default: '0xbF7B786d68b18754Ec3932aC4B0d28b19Ff35b83',
  })
  ca: string;

  @ApiProperty({
    description: 'NFT의 ID',
    default: '1',
  })
  tokenId: string;
}

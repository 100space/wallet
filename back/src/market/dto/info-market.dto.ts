import { ApiProperty } from '@nestjs/swagger';

export class NftInfoDto {
  @ApiProperty({
    description: 'NFT의 CA',
    default: '0x6Cd0b10f6dba6a132cCa8ec5eb3CF32916d44157',
  })
  ca: string;

  @ApiProperty({
    description: 'NFT의 ID',
    default: 1,
  })
  tokenId: number;
}

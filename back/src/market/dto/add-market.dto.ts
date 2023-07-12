import { ApiProperty } from '@nestjs/swagger';

export class AddNftDto {
  @ApiProperty({
    description: '현재 계정의 EOA',
    default: '0x7435fc2f2782218210200188A3Cccc96Fb98A966',
  })
  eoa: string;

  @ApiProperty({
    description: 'NFT의 CA',
    default: '0x7232094AFC469C7EAd50E3dc595b0A2726FE51A6',
  })
  ca: string;

  @ApiProperty({
    description: '토큰 ID',
    default: '721',
  })
  tokenId: string;
}

export class AddNftPlusDto extends AddNftDto {
  tokenStandard: string;
}

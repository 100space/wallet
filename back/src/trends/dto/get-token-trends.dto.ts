import { ApiProperty } from '@nestjs/swagger';

export class TokenSymbolDto {
  @ApiProperty({
    description: '토큰의 Symbol',
    default: 'MATIC',
  })
  symbol: string;
}

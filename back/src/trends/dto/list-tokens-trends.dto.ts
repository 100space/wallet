import { ApiProperty } from '@nestjs/swagger';

export class ListTokensDto {
  @ApiProperty({
    example: [
      { symbol: 'eth', amount: 10 },
      { symbol: 'bTc', amount: 1 },
    ],
    description: '보유한 토큰과 수량',
  })
  tokens: { symbol: string; amount: number }[];
}

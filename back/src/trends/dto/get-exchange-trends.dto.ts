import { ApiProperty } from '@nestjs/swagger';

export class ExchangeParams {
  @ApiProperty({
    name: 'from',
    required: false,
    description: '기준이되는 통화를 지정합니다.',
    example: 'USD',
  })
  from?: string;

  @ApiProperty({
    name: 'to',
    required: false,
    description: '해당하는 환율 정보를 요청합니다.',
    example: 'KRW,JPY',
  })
  to?: string;
}

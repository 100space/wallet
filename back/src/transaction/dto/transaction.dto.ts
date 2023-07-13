import { ApiProperty } from '@nestjs/swagger';

export class sendTransactionDto {
  @ApiProperty({
    description: '보내는 유저의 privateKey',
    default: '',
  })
  privateKey: string;
  @ApiProperty({
    description: '받는 유저의 Account',
    default: '0xceCD415ceC15Fd08140f215c48116C42B8618f43',
  })
  receiver: string;
  @ApiProperty({
    description: '보낼 금액 (ETH 단위)',
    default: '0.01',
  })
  amount: string;
}

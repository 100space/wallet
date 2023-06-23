import { ApiProperty } from '@nestjs/swagger';

export class sendTransactionDto {
  @ApiProperty({
    description: '보내는 유저의 Account',
    default: '0x2ba3345232B14e11d49eFa251589be52230073fe',
  })
  sender: string;
  @ApiProperty({
    description: '받는 유저의 Account',
    default: '0x44DB8b4d5CAa16543B6cec0b5ca1eE174b82FD6D',
  })
  receiver: string;
  @ApiProperty({
    description: '보낼 금액 (ETH 단위)',
    default: '1',
  })
  amount: string;
}

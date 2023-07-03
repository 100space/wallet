import { ApiProperty } from '@nestjs/swagger';

export class AddTokenDto {
  networkInfo: { rpc: string; chainId: number };

  @ApiProperty({
    description: '토큰의 CA',
    default: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
  })
  ca: string;

  @ApiProperty({
    description: '토큰의 Symbol',
    default: 'DERC20',
  })
  symbol: string;

  @ApiProperty({
    description: '토큰의 Decimal',
    default: '18',
  })
  decimal: number;
}

export class CreateTokenDto {
  ca: string;
  symbol: string;
  decimal: number;
  image: string;
}

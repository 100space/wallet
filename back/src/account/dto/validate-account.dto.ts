import { ApiProperty } from '@nestjs/swagger';

export class ValidateAccountDto {
  @ApiProperty({
    example: '0x0000000000000000000000000000000000000000',
    description: 'The address of the user',
  })
  address: string;
}
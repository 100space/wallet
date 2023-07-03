import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
  @ApiProperty({
    example: '0x0000000000000000000000000000000000000000',
    description: 'The address of the user',
  })
  address: string;

  @ApiProperty({
    example: 'nickname1',
    description: 'The nickname of the user',
  })
  nickname: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'The image URL of the user',
  })
  image?: string;
}

export class CreateAccountResponseDto {
  @ApiProperty({ example: true, description: 'Indicates if the account creation was successful' })
  success: boolean;
}
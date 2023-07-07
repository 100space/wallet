import { ApiProperty } from '@nestjs/swagger';

export type IAddress = string

export class GetAccountResponseDto {
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
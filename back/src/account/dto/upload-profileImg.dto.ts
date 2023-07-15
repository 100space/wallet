import { ApiProperty } from "@nestjs/swagger";

export class UploadProfileImgDto {
    @ApiProperty({ description: 'File for upload' })
    file: Express.MulterS3.File;

    @ApiProperty({ example: '0x0000000000000000000000000000000000000000', description: 'The address of the user' })
    address?: string;
}

export class UploadProfileImgResponseDto {
    @ApiProperty({ example: 'https://example.com/image.jpg', description: 'The uploaded image URL' })
    image?: string;
}
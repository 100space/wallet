import { ApiProperty } from '@nestjs/swagger';

export class ListCollectionsResponseDto {
  @ApiProperty({
    description: 'NFT Collection의 CA',
  })
  ca: string;

  @ApiProperty({
    description: 'NFT Collection의 이름',
  })
  name: string;

  @ApiProperty({
    description: 'NFT Collection의 Symbol',
  })
  nickname: string;

  @ApiProperty({
    description: 'NFT Collection의 설명',
  })
  description: string;

  @ApiProperty({
    description: 'NFT Collection의 대표 이미지',
  })
  image: string;

  @ApiProperty({
    description: 'NFT Collection의 최저 가격',
  })
  prices: { currency: string; price: number }[];
}

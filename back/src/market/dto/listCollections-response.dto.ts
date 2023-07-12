import { ApiProperty } from '@nestjs/swagger';

export class ListCollectionsResponseDto {
  @ApiProperty({
    description: 'NFT Collection의 CA',
    example: '0xfD7e1000d5528730F05e5De9a110D06176ea5886',
  })
  ca: string;

  @ApiProperty({
    description: 'NFT Collection의 이름',
    example: 'spaceSeries',
  })
  name: string;

  @ApiProperty({
    description: 'NFT Collection의 Symbol',
    example: 'spaceToken',
  })
  nickname: string;

  @ApiProperty({
    description: 'NFT Collection의 설명',
    example: 'Posting space-related NFTs',
  })
  description: string;

  @ApiProperty({
    description: 'NFT Collection의 대표 이미지',
    example:
      'https://nest-deploy-c764d61cc1b8.herokuapp.com/lasco_996758_1689047204272.png',
  })
  image: string;

  @ApiProperty({
    description: 'NFT Collection의 좋아요 개수',
    example: 0,
  })
  like: number;

  @ApiProperty({
    description: '생성 시간',
    example: '2023-07-11T03:15:22.708Z',
  })
  latest: string;

  @ApiProperty({
    description: 'NFT Collection의 최저 가격',
    example: [
      {
        currency: 'KRW',
        price: 5.215,
      },
      {
        currency: 'MATIC',
        price: 5.215,
      },
    ],
  })
  prices: { currency: string; price: number }[];
}

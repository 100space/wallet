import { ApiProperty } from '@nestjs/swagger';

export class ListNftByEoaDto {
  @ApiProperty({
    description: 'NFT 소유주의 EOA',
    default: '0x61dC3D704d307Ed8dC7ac9918657BD37EEED95D3',
  })
  eoa: string;
}

export class ListNftByCaDto {
  @ApiProperty({
    description: 'NFT의 CA',
    default: '0xbF7B786d68b18754Ec3932aC4B0d28b19Ff35b83',
  })
  ca: string;
}

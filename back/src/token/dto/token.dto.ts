import { ApiProperty } from '@nestjs/swagger';

export class getTokenDTO {
  @ApiProperty({
    description: '토큰의 CA Address',
    default: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
  })
  contractAddress: string;
}

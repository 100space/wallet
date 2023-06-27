import { ApiProperty } from '@nestjs/swagger';

export class getTokenBalanceDTO {
  @ApiProperty({
    description: '각 토큰 주소',
    default:
      '[{"type":"coin", "ca":"0x26006236eaB6409D9FDECb16ed841033d6B4A6bC"}, {"type": "token", "ca": "0x1F78AC65DCF6F7B696B5175D7D5E516FE07636a9"}, {"type": "token", "ca": "0x6f1319fB874A7C3317E78cF127505fEFf97157c2"}]',
  })
  assets: string[];

  @ApiProperty({
    description: '사용자의 계정',
    default: '0x26006236eaB6409D9FDECb16ed841033d6B4A6bC',
  })
  account: string;
}

export class getTokenDTO {
  @ApiProperty({
    description: '토큰의 CA Address',
    default: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
  })
  contractAddress: string;
}

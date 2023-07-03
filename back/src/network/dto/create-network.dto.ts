import { ApiProperty } from "@nestjs/swagger"

export class CreateNetworkDto {
    @ApiProperty({
        example: 'Ethereum',
        description: '등록할 네트워크의 이름을 나타냅니다.',
    })
    name: string

    @ApiProperty({
        example: 'https://mainnet.infura.io/v3/',
        description: '등록할 네트워크의 RPC URL을 나타냅니다.',
    })
    networkUrl: string
    
    @ApiProperty({
        example: 1,
        description: '등록할 네트워크의 chainId를 나타냅니다.',
    })
    chainId: number

    @ApiProperty({
        example: 'ETH',
        description: '등록할 네트워크의 통화 기호를 나타냅니다.',
    })
    symbol: string
}

import { ApiProperty } from "@nestjs/swagger"

export class UpdateNetworkDto {
    @ApiProperty({
        example: '0x0000000000000000000000000000000000000000',
        description: '사용자의 주소를 나타냅니다.',
    })
    address: string

    @ApiProperty({
        example: {
            networkList: [
                "ETHEREUM",
                "ARBITRUM",
                "POLYGON",
                "GOERLI",
                "BINANCE"
            ]
        },
        description: '네트워크의 이름들을 배열로 반환합니다.',
    })
    networkList: string[]
}

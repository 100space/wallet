import { ApiProperty } from "@nestjs/swagger"

export class GetNetworkResponseDto {
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
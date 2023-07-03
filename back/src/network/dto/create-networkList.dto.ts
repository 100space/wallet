import { ApiProperty } from "@nestjs/swagger"

export class CreateNetworkListDto {
    @ApiProperty({
        example: '0x0000000000000000000000000000000000000000',
        description: '사용자의 address를 나타냅니다.',
    })
    address: string

    @ApiProperty({
        example: ["Ethereum", "Arbitrum", "Polygon", "Goerli"],
        description: '사용자가 등록한 네트워크의 목록을 나타냅니다.',
    })
    networkList: string[]
}

export class CreateNetworkListResponseDto {

}
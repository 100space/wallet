import { ApiProperty } from "@nestjs/swagger"

export class UpdateTrendDto {
    @ApiProperty({
        example: 1,
        description: 'The rank of coin',
    })
    rank: number

    @ApiProperty({
        example: 1000,
        description: 'The price of coin',
    })
    price: number

    @ApiProperty({
        example: 0.00,
        description: 'The changePercent of coin',
    })
    changePercent: number
}
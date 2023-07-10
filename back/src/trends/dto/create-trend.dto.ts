export class CreateTrendDto {
    name: string
    symbol: string
    rank: number
    marketCap: number = 0
    totalSupply: number = 0
    maxSupply: number = 0
    circulatingSupply: number = 0
    description: string = "정보가 존재하지 않습니다."
    image: string
    changePercent: number
    currency: string
    price: number
}
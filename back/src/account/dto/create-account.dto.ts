import { ApiProperty } from "@nestjs/swagger";

export class CreateAccountDto {
    @ApiProperty({
        description: '주소와 닉네임을 받아 데이터베이스에 저장한다.',
        default: { address: '0x0000000000000000000000000000000000000000', nickname: 'address1' }
    })
    success: boolean;
}

export interface ICreateAccountDto {
    address: string
    nickname: string
}
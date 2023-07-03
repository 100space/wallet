import { PartialType } from '@nestjs/swagger';
import { CreateNetworkDto } from './create-network.dto';

export class UpdateNetworkListDto extends PartialType(CreateNetworkDto) {
    
}
